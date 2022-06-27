import request from 'supertest'
import app from '../src/app'
import { resizedImageFiles } from '../src/app'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

describe('Placeholder API', () => {
    it('should return image of the desired size', async () => {
        const response = await request(app).get('/api/placeholder/123/456')
        const metadata = await sharp(response.body).metadata()
        expect(response.statusCode).toBe(200)
        expect(metadata.width).toBe(123)
        expect(metadata.height).toBe(456)
    })

    it('should return sqaured image if only one dimension is provided', async () => {
        const response = await request(app).get('/api/placeholder/123')
        const metadata = await sharp(response.body).metadata()
        expect(response.statusCode).toBe(200)
        expect(metadata.width).toEqual(metadata.height)
    })

    it('should throw error 400 if the size is not a number', async () => {
        const response = await request(app).get('/api/placeholder/x/y')
        expect(response.statusCode).toBe(400)
        expect(response.text).toContain('Invalid width or height')
    })
})

describe('Image resizing API', () => {
    it('should return array of available image names', async () => {
        const response = await request(app).get('/api/images')
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(expect.arrayContaining(['cat', 'dog']))
    })

    it('should return image in the desired size', async () => {
        const response = await request(app).get('/api/images/cat?width=123&height=456')
        const metadata = await sharp(response.body).metadata()
        expect(response.statusCode).toBe(200)
        expect(metadata.width).toBe(123)
        expect(metadata.height).toBe(456)
    })

    it("should save the image to the cache if it doesn't exist", async () => {
        const imageName = 'cat'
        const fileName = `${imageName}_123x456.png`
        const filePath = path.resolve('./cache/resized', fileName)
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
            for (let i = 0; i < resizedImageFiles.length; i++) {
                if (resizedImageFiles[i] === fileName) {
                    resizedImageFiles.splice(i, 1)
                    break
                }
            }
        }
        const response = await request(app).get('/api/images/cat?width=123&height=456')
        expect(response.statusCode).toBe(200)
        expect(fs.existsSync(path.resolve('./cache/resized/cat_123x456.png'))).toBe(true)
    })

    it('should return sqaured image if only width is provided', async () => {
        const response = await request(app).get('/api/images/cat?width=123')
        const metadata = await sharp(response.body).metadata()
        expect(response.statusCode).toBe(200)
        expect(metadata.width).toEqual(metadata.height)
    })

    it('should throw error 404 if imagename does not exist', async () => {
        const response = await request(app).get('/api/images/non-existing-image?width=123&height=456')
        expect(response.statusCode).toBe(404)
        expect(response.text).toContain('Image not found')
    })

    it('should throw error 400 if the size is not a number', async () => {
        const response = await request(app).get('/api/images/cat?width=x&height=y')
        expect(response.statusCode).toBe(400)
        expect(response.text).toContain('Invalid width or height')
    })
})
