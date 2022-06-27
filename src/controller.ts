import { Request, Response } from 'express'
import APIService from './services'

export class APICtrl {
    async getPlaceholder(req: Request, res: Response): Promise<void> {
        try {
            const width = Number(req.params.width)
            const height = Number(req.params.height) || width
            res.sendFile(await APIService.getPlaceholder(width, height))
        } catch (err: unknown) {
            res.sendStatus(500).send('Processing Error, please try again later')
        }
    }

    getImageNames(req: Request, res: Response): void {
        try {
            res.send(APIService.getImageList())
        } catch (err: unknown) {
            res.sendStatus(500).send('Processing Error, please try again later')
        }
    }

    async getResizedImage(req: Request, res: Response): Promise<void> {
        try {
            const imageName = req.params.imageName
            const width = Number(req.query.width)
            const height = Number(req.query.height) || width
            res.sendFile(await APIService.getResizedImage(imageName, width, height))
        } catch (err: unknown) {
            res.sendStatus(500).send('Processing Error, please try again later')
        }
    }
}

export default new APICtrl()
