import TypeController from '../controllers/type.mjs'

import { Router } from 'express'
const router = Router()

router.get('/', TypeController.getAllTypes)

export default router
