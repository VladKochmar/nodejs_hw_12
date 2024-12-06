import SellerController from '../controllers/seller.mjs'

import { Router } from 'express'
const router = Router()

router.get('/', SellerController.getAllSellers)

export default router
