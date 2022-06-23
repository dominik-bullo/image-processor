import { Router } from 'express'
import placeholderRouter from './api/placeholder'
import imagesRouter from './api/images'

const router: Router = Router()

router.use('/placeholder', placeholderRouter)

router.use('/images', imagesRouter)

export default router
