import { Router } from 'express'
import APICtrl from '../../controller'

const images: Router = Router()

images.get('/', APICtrl.getImages)

export default images
