import { Router } from 'express'
import APICtrl from '../../controller'
import { placeholderValidation } from '../../middleware'

const placeholder: Router = Router()

placeholder
    .get('/:width', placeholderValidation, APICtrl.getPlaceholder)
    .get('/:width/:height', placeholderValidation, APICtrl.getPlaceholder)

export default placeholder
