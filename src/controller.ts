import { Request, Response } from 'express'
import { APIService } from './services'

export class APICtrl {
    static getHello(req: Request, res: Response): void {
        res.send(APIService.getHello())
    }
}
