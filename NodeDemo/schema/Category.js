// Import các module cần thiết
const mongoose = require("mongoose");

// Mô hình cho Category
const categorySchema = new mongoose.Schema({
    name: String,
    order: Number,
    isdelete: { type: Boolean, default: false },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  });

  module.exports = mongoose.model('Category', categorySchema);