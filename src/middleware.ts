/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express'
import { imageFiles } from './app'

const MIN_IMAGE_DIMENSION = 1
const MAX_IMAGE_DIMENSION = 3000

export const placeholderValidation = (req: Request, res: Response, next: NextFunction): void => {
    const width = Number(req.params.width)
    const height = Number(req.params.height) || width
    if (
        isNaN(width) ||
        width < MIN_IMAGE_DIMENSION ||
        width > MAX_IMAGE_DIMENSION ||
        isNaN(height) ||
        height < MIN_IMAGE_DIMENSION ||
        height > MAX_IMAGE_DIMENSION
    ) {
        res.status(400).send('ERROR: Invalid width or height')
        return
    }
    next()
}

export const imageResizingValidation = (req: Request, res: Response, next: NextFunction): void => {
    const imageName = req.params.imageName
    if (!imageFiles.includes(imageName)) {
        res.status(404).send('ERROR: Image not found')
        return
    }
    const width = Number(req.query.width)
    const height = Number(req.query.height) || width
    if (
        isNaN(width) ||
        width < MIN_IMAGE_DIMENSION ||
        width > MAX_IMAGE_DIMENSION ||
        isNaN(height) ||
        height < MIN_IMAGE_DIMENSION ||
        height > MAX_IMAGE_DIMENSION
    ) {
        res.status(400).send('ERROR: Invalid width or height')
        return
    }
    next()
}
