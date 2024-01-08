const express = require('express');
const router = express.Router();
const responseData = require('../helper/responseData');
const categoryController  = require('../models/product');


// Phương thức CRUD cho Category
router.get('/', async function (req, res, next) {
    try {
      const categories = await categoryController.getCategories();
      responseData.responseReturn(res, 200, true, categories);
    } catch (error) {
      responseData.responseReturn(res, 500, false, 'Internal Server Error');
    }
  });
  
  router.get('/categories/:id/products', async function (req, res, next) {
    try {
      const categoryId = req.params.id;
      const categoryWithProducts = await categoryController.getCategoryWithProducts(categoryId);
      responseData.responseReturn(res, 200, true, categoryWithProducts);
    } catch (error) {
      responseData.responseReturn(res, 500, false, 'Internal Server Error');
    }
  });
  
  module.exports = router;