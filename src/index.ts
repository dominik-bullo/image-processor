/* eslint-disable no-undef */
/* eslint-disable no-console */
import express, { Application } from 'express'
import router from './router'

const app: Application = express()

app.use('/', router)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port} ...`)
})
