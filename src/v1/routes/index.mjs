import productRouter from './product.mjs'
import sellersRouter from './seller.mjs'
import typesRouter from './type.mjs'

import { Router } from 'express'
const routes = Router()

routes.use('/products', productRouter)
routes.use('/sellers', sellersRouter)
routes.use('/types', typesRouter)

export default routes
