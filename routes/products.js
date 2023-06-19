var express = require('express');
const ProductsModel = require('../models/ProductsModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var products = await ProductsModel.find({});
    res.render('products/view', { products: products })
});

router.get('/add', async (req, res) => {
    res.render('products/newproducts');
});
router.post('/add', async (req, res) => {
    var product = req.body;
    await ProductsModel.create(product);
    res.redirect('/products');
});

router.get('/delete/:id', async (req, res) => {
    await ProductsModel.findByIdAndDelete(req.params.id)
        .then(() => { console.log("Delete toy succeed !") })
        .catch((err) => { console.error("Delete toy fail") })
    res.redirect('/products');
});

router.get('/edit/:id', async (req, res) => {
    var product = await ProductsModel.findById(req.params.id);
    res.render('products/editproducts', { product: product })
});

router.post('/edit/:id', async (req, res) => {
    var product = await ProductsModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/products');
});

router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    var products = await ProductsModel.find({ name: new RegExp(keyword, "i") })
    res.render('products/view', { products: products })
});

module.exports = router;







// price: { $gte: 150, $lte: 200 }


