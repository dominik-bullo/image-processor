import { Router } from 'express'
import { APICtrl } from './controller'

const router: Router = Router()

export default router.get('/', APICtrl.getHello)
