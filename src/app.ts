import express, { Application } from 'express'
import APIroutes from './routes/api'
import path from 'path'
import fs from 'fs'

const app: Application = express()

// load existing placeholder image file names
export const placeholderFiles = fs
    .readdirSync(path.resolve('./cache/placeholder'), { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .sort()

// load existing image names
export const imageFiles = fs
    .readdirSync(path.resolve('./public/images'), { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .map((fileName) => fileName.split('.')[0])
    .sort()

// load existing resized image file names
export const resizedImageFiles = fs
    .readdirSync(path.resolve('./cache/resized'), { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .sort()

app.use('/api', APIroutes)

export default app
