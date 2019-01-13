const DB = require('../utils/db.js')
module.exports = {
  list: async ctx => {
    ctx.state.data = await DB.query("SELECT * FROM product;")
  },

  detail: async ctx => {
    let productId = + ctx.params.id
    let product

    if (!isNaN(productId)) {
      product = (await DB.query('select * from product where product.id = ?', [productId]))[0]
    } else {
      product = {}
    }

    ctx.state.data = product
  }

}