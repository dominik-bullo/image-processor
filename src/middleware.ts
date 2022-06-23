/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express'

export const logger = async (req: Request, res: Response, next: NextFunction) => {
    const localTime = new Date().toLocaleString()
    const data = `[${localTime}] ${req.method} ${req.path}   (Query: ${JSON.stringify(req.query)})`
    console.log(data)
    next()
}
