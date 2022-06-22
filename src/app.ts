import express, { Application } from 'express'
import placeholderRouter from './routes/placeholder'

const app: Application = express()

app.use('/placeholder', placeholderRouter)

export default app
