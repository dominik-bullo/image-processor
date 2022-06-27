import express, { Application } from 'express'
import APIroutes from './routes/api'
import { logger } from './middleware'
import path from 'path'
import fs from 'fs'

const app: Application = express()

// load existing placeholder image files
export const placeholderFiles = fs
    .readdirSync(path.resolve('./images/placeholder'), { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .sort()

console.log('loaded placeholders:', placeholderFiles)

// load existing images
export const imageFiles = fs
    .readdirSync(path.resolve('./images'), { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .map((fileName) => fileName.split('.')[0])
    .sort()

console.log('loaded original images:', imageFiles)

// load existing resized image files
export const resizedImageFiles = fs
    .readdirSync(path.resolve('./images/resized'), { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .sort()

console.log('loaded resized images:', resizedImageFiles)

app.use(logger).use('/api', APIroutes)

export default app
