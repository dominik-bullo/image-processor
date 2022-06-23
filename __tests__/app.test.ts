import request from 'supertest'
import app from '../src/app'
import sharp from 'sharp'

describe('Placeholder API', () => {
    it('should return a SVG of the desired size', async () => {
        const response = await request(app).get('/api/placeholder/123/456')
        const metadata = await sharp(Buffer.from(response.text)).metadata()
        expect(response.statusCode).toBe(200)
        expect(metadata.width).toBe(123)
        expect(metadata.height).toBe(456)
    })

    it('should return a sqaure if only one dimension is provided', async () => {
        const response = await request(app).get('/api/placeholder/123')
        const metadata = await sharp(Buffer.from(response.text)).metadata()
        expect(response.statusCode).toBe(200)
        expect(metadata.width).toBe(123)
        expect(metadata.height).toBe(123)
    })

    it('should throw an error if the size is not a number', async () => {
        const response = await request(app).get('/api/placeholder/x/y')
        expect(response.statusCode).toBe(400)
        expect(response.text).toBe('Invalid width or height')
    })
})

describe('Image resizing API', () => {
    it('should return the image in the desired size', async () => {
        const response = await request(app).get('/api/images/cat.jpg?width=123&height=456')
        const metadata = await sharp(Buffer.from(response.text)).metadata()
        expect(response.statusCode).toBe(200)
        expect(metadata.width).toBe(123)
        expect(metadata.height).toBe(456)
    })

    it("should throw error 404 if the image doesn't exist", async () => {
        const response = await request(app).get('/api/images/xy.jpg?width=123&height=456')
        expect(response.statusCode).toBe(404)
        expect(response.text).toBe('Image not found')
    })

    it('should throw error 400 if the size is not a number', async () => {
        const response = await request(app).get('/api/images/cat.jpg?width=x&height=y')
        expect(response.statusCode).toBe(400)
        expect(response.text).toBe('Invalid width or height')
    })
})
