var SchemaProduct = require('../schema/Product')

module.exports ={
    // Read all products with isdelete = false, sorted by order
  getall: function (query) {
    var sort = {};
    var Search = {};
    if (query.sort) {
      if (query.sort[0] == '-') {
        sort[query.sort.substring(1)] = 'desc';
      } else {
        sort[query.sort] = 'asc';
      }
    }
    if (query.key) {
      Search.name = new RegExp(query.key, 'i');
    }
    Search.isdelete = false; // Chỉ lấy các sản phẩm không bị xóa
    var limit = parseInt(query.limit) || 2;
    var page = parseInt(query.page) || 1;
    var skip = (page - 1) * limit;
    return Product.find(Search).sort(sort).limit(limit).skip(skip).exec();
  },

  // Create a new product
  createProduct: function (product) {
    return new Product(product).save();
  },

    // Update product information
    updateProduct: function (productId, updatedData) {
        return Product.findByIdAndUpdate(productId, updatedData, { new: true }).exec();
      },

  // Update isdelete to true
  deleteProduct: function (productId) {
    return Product.findByIdAndUpdate(productId, { isdelete: true }).exec();
  },
}