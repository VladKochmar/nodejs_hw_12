import TypesDBService from '../models/type/TypesDBService.mjs'

class TypeController {
  static async getAllTypes(req, res) {
    try {
      const typesData = await TypesDBService.getList()
      res.status(200).json({ types: typesData })
    } catch (error) {
      res.status(500).json({ error: 'Error fetching sellers' })
    }
  }
}

export default TypeController
