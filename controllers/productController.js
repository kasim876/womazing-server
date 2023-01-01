const { Product } = require('../db');

class ProductController {
  async getProducts(req, res) {
    const { category } = req.query;
    
    let products = [];
    
    if (category === 'Все') {
      products = await Product.findAll()
    } else {
      products = await Product.findAll({
        where: {
          category,
        }
      })
    }

    return res.json(products);
  }
}

module.exports = new ProductController;