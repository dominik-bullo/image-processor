import { Request, Response } from 'express'
import APIService from './services'

export class APICtrl {
    getPlaceholder(req: Request, res: Response): void {
        const width = Number(req.params.width)
        const height = Number(req.params.height)
        if (isNaN(width) || isNaN(height)) {
            res.status(400).send('Invalid width or height')
            return
        }
        res.send(APIService.getPlaceholder(width, height))
    }
}

export default new APICtrl()
