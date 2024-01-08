var SchemaProduct = require('../schema/Category')

module.exports ={
// Read all categories with isdelete = false, sorted by order
getCategories: function () {
    return Category.find({ isdelete: false }).sort({ order: 1 }).exec();
  },

  // Read all products of a specific category
  getCategoryWithProducts: function (categoryId) {
    return Category.findById(categoryId).populate('products').exec();
  }
}