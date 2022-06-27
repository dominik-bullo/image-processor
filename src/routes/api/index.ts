import { Router } from 'express'
import placeholderRouter from './placeholder'
import imagesRouter from './images'

const router: Router = Router()

export default router.use('/placeholder', placeholderRouter).use('/images', imagesRouter)
