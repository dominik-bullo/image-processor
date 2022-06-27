import APIService from '../src/services'
import path from 'path'
import fs from 'fs'
import sharp from 'sharp'

describe('API Services', () => {
    it('should create image of the desired size', async () => {
        const image = APIService.createImg(123, 456)
        const metadata = await sharp(Buffer.from(image)).metadata()
        expect(metadata.width).toBe(123)
        expect(metadata.height).toBe(456)
    })

    it('should resize without error', async () => {
        const imageName = 'cat'
        const fileName = `${imageName}_123x456.png`
        const filePath = path.resolve('./cache/resized', fileName)
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
        }
        expect(async () => {
            await APIService.resizeImage(imageName, 123, 456, filePath)
        }).not.toThrow()
    })
})
