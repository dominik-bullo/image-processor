import { Router } from 'express'
import APICtrl from '../../controller'

const placeholder: Router = Router()

placeholder.get('/:width', APICtrl.getPlaceholder)
placeholder.get('/:width/:height', APICtrl.getPlaceholder)

export default placeholder
