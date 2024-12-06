import SellersDBService from '../models/seller/SellersDBService.mjs'

class SellerController {
  static async getAllSellers(req, res) {
    try {
      const sellersData = await SellersDBService.getList()
      res.status(200).json({ sellers: sellersData })
    } catch (error) {
      res.status(500).json({ error: 'Error fetching sellers' })
    }
  }
}

export default SellerController
