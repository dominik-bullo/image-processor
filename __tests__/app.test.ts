import request from 'supertest'
import app from '../src/app'
import sharp from 'sharp'

describe('Placeholder API', () => {
    it('should return a SVG of the desired size', async () => {
        const response = await request(app).get('/placeholder/123/456')
        const metadata = await sharp(Buffer.from(response.text)).metadata()
        expect(response.statusCode).toBe(200)
        expect(metadata.width).toBe(123)
        expect(metadata.height).toBe(456)
    })

    it('should throw an error if the size is not a number', async () => {
        const response = await request(app).get('/placeholder/100/100a')
        expect(response.statusCode).toBe(400)
        expect(response.text).toBe('Invalid width or height')
    })
})
