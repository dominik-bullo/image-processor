/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express'

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path} queryParams:${JSON.stringify(req.query)}`)
    next()
}