import ProductController from '../controllers/product.mjs'
import FiltersService from '../controllers/filters.mjs'

import { Router } from 'express'
const router = Router()

router.get('/filters-data', FiltersService.getFiltersData)
router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getById)
router.get('/register/:id?', ProductController.registerForm)
router.post('/register/:id?', ProductController.registerProduct)
router.delete('/', ProductController.deleteProduct)

export default router
