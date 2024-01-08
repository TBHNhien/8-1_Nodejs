const express = require('express');
const router = express.Router();
const responseData = require('../helper/responseData');
const productController = require('../models/product');


// Phương thức CRUD cho Product
router.get('/', async function (req, res, next) {
  try {
    const products = await productController.getall(req.query);
    responseData.responseReturn(res, 200, true, products);
  } catch (error) {
    responseData.responseReturn(res, 500, false, 'Internal Server Error');
  }
});

router.post('/addproducts', async function (req, res, next) {
  try {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      responseData.responseReturn(res, 400, false, errors.array().map(error => error.msg));
      return;
    }

    const newProduct = await productController.createProduct(req.body);
    responseData.responseReturn(res, 200, true, newProduct);
  } catch (error) {
    responseData.responseReturn(res, 500, false, 'Internal Server Error');
  }
});

router.post('/addproducts', async function (req, res, next) {
    try {
      // Validate request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        responseData.responseReturn(res, 400, false, errors.array().map(error => error.msg));
        return;
      }
  
      const newProduct = await productController.createProduct(req.body);
      responseData.responseReturn(res, 200, true, newProduct);
    } catch (error) {
      responseData.responseReturn(res, 500, false, 'Internal Server Error');
    }
  });

router.delete('/delproducts/:id', async function (req, res, next) {
  try {
    const productId = req.params.id;
    await productController.deleteProduct(productId);
    responseData.responseReturn(res, 200, true, 'Delete successfully');
  } catch (error) {
    responseData.responseReturn(res, 500, false, 'Internal Server Error');
  }
});

module.exports = router;