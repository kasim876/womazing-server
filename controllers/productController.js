const { Product } = require('../db');

class ProductController {
  async getAll(req, res) {
    let { category, limit, page } = req.query;
    
    page = page || 1
    limit = limit || 9

    let offset = page * limit - limit
    
    let products = [];
    
    if (category === 'Все') {
      products = await Product.findAndCountAll({limit, offset})
    } else {
      products = await Product.findAndCountAll({
        where: {
          category,
        },
        limit,
        offset
      })
    }

    return res.json(products);
  }
}

module.exports = new ProductController;