import { Request, Response } from 'express'
import APIService from './services'

export class APICtrl {
    getHello(req: Request, res: Response): void {
        res.send(APIService.getHello())
    }
}

export default new APICtrl()
