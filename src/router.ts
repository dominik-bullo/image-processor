import { Router } from 'express'
import APICtrl from './controller'

const router: Router = Router()

export default router
    // hello
    .get('/hello', APICtrl.getHello)
    // placeholder
    .get('/placeholder/:width/:height', APICtrl.getPlaceholder)
