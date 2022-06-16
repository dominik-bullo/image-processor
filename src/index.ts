/* eslint-disable no-undef */
/* eslint-disable no-console */
import express, { Application, NextFunction, Request, Response } from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello World!')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port} ...`)
})
