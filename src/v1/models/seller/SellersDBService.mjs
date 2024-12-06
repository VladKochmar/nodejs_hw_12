import Seller from './Seller.mjs'
import MongooseCRUDManager from '../MongooseCRUDManager.mjs'

class SellersDBService extends MongooseCRUDManager {
  static async getList({ filters }) {
    try {
      const res = await Seller.find(filters, { name: 1 })
      return res
    } catch (err) {
      return []
    }
  }
}

export default new SellersDBService(Seller)
