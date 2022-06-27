import sharp from 'sharp'
import path from 'path'
import { placeholderFiles, imageFiles, resizedImageFiles } from './app'

export class APIService {
    createImg(width: number, height: number): string {
        return `<svg width="${width}" height="${height}"><rect x="0" y="0" width="${width}" height="${height}" fill="lightgreen" stroke="green" stroke-width="5" /><text x="5" y="15">${width} x ${height}</text></svg>`
    }

    async getPlaceholder(width: number, height: number): Promise<string> {
        const fileName = `${width}x${height}.png`
        const filePath = path.resolve('./images/placeholder', fileName)
        if (placeholderFiles.includes(fileName)) {
            return filePath
        } else {
            await sharp(Buffer.from(this.createImg(width, height)))
                .png()
                .toFile(filePath)
            placeholderFiles.push(fileName)
            console.log('created placeholder:', placeholderFiles[placeholderFiles.length - 1])
            return filePath
        }
    }

    getImageList(): string[] {
        return imageFiles
    }

    async getResizedImage(imageName: string, width: number, height: number): Promise<string> {
        const fileName = `${imageName}_${width}x${height}.png`
        const filePath = path.resolve('./images/resized', fileName)
        if (resizedImageFiles.includes(fileName)) {
            return filePath
        }
        await sharp(path.resolve(`./images/${imageName}.jpg`))
            .resize(width, height)
            .png()
            .toFile(filePath)
        resizedImageFiles.push(fileName)
        console.log('created resized image:', resizedImageFiles[resizedImageFiles.length - 1])
        return filePath
    }
}

export default new APIService()
