import ProductsDBService from '../models/product/ProductsDBService.mjs'

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const productsData = await ProductsDBService.getList(req.query)

      res.status(200).json({ data: productsData })
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' })
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id

      let item = await ProductsDBService.getById(id, [
        {
          path: 'seller',
          select: 'name',
        },
        {
          path: 'productType',
          select: 'title',
        },
      ])

      res.status(200).json({ data: item })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static async registerForm(req, res) {
    try {
      const id = req.params.id
      let product = null
      if (id) {
        product = await ProductsDBService.getById(id)
      }

      res.status(200).json({
        data: product,
      })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static async registerProduct(req, res) {
    const data = req.body

    try {
      const productData = {
        ...req.body,
      }

      if (req.params.id) {
        await ProductsDBService.update(req.params.id, productData)
      } else {
        productData.seller = req.user.id
        await ProductsDBService.create(productData)
      }

      res.status(200).json({ message: 'Product registered successfully' })
    } catch (err) {
      res.status(500).json({ errors: [{ msg: err.message }], product: data })
    }
  }

  static async deleteProduct(req, res) {
    try {
      await ProductsDBService.deleteById(req.body.id)
      res.status(200).json({ message: 'Product deleted' })
    } catch (err) {
      res.status(500).json({ error: 'Error deleting product' })
    }
  }
}

export default ProductController
