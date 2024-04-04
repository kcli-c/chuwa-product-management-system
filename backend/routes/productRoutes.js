const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST - Create a new product
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET - Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PUT - Update an existing product
router.put('/:productId', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET - Retrieve a product by ID
router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
