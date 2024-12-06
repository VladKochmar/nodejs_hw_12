import TypesDBService from '../models/type/TypesDBService.mjs'
import SellersDBService from '../models/seller/SellersDBService.mjs'

class FiltersService {
  static async getFiltersData(req, res) {
    try {
      // Виконання запитів паралельно з використанням Promise.all
      const [typesList, sellersList] = await Promise.all([TypesDBService.getList(), SellersDBService.getList()])

      // Повернення об'єднаних даних
      res.status(200).json({
        data: {
          types: typesList,
          sellers: sellersList,
        },
        success: true,
      })
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' })
    }
  }
}

export default FiltersService
