// Import các module cần thiết
const mongoose = require("mongoose");


// Mô hình cho Product
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  isdelete: { type: Boolean, default: false },
  order: Number,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
});

module.exports = mongoose.model('Product', productSchema);