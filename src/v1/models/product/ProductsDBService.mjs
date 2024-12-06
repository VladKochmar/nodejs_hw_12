import Product from './Product.mjs'
import MongooseCRUDManager from '../MongooseCRUDManager.mjs'

class ProductsDBService extends MongooseCRUDManager {
  static fieldsConfigurations = [
    {
      fieldName: 'title',
      filterCategory: 'search',
    },
    {
      fieldName: 'price',
      filterCategory: 'range',
    },
    {
      fieldName: 'number',
      filterCategory: 'range',
    },
    {
      fieldName: 'productType',
      filterCategory: 'list',
    },
    {
      fieldName: 'seller',
      filterCategory: 'list',
    },
  ]

  async getList(reqQuery) {
    try {
      const res = await this.findManyWithSearchOptions(reqQuery, ProductsDBService.fieldsConfigurations, null, [
        {
          fieldForPopulation: {
            path: 'seller',
            select: 'name',
          },
        },
        {
          fieldForPopulation: {
            path: 'productType',
            select: 'title',
          },
        },
      ])

      return res
    } catch (err) {
      console.error(err)
      return []
    }
  }
}

export default new ProductsDBService(Product)
