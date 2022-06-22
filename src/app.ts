import express, { Application } from 'express'
import routes from './routes'
import { logger } from './middleware'

const app: Application = express()

app.use(logger)

app.use('/api', routes)

export default app
