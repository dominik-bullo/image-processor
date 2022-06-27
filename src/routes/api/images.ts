import { Router } from 'express'
import APICtrl from '../../controller'
import { imageResizingValidation } from '../../middleware'

const images: Router = Router()

images.get('/', APICtrl.getImageNames).get('/:imageName', imageResizingValidation, APICtrl.getResizedImage)

export default images
