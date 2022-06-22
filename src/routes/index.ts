import { Router } from 'express'
import placeholderRouter from './api/placeholder'

const router: Router = Router()

router.use('/placeholder', placeholderRouter)

export default router
