var express = require('express');
const Products2Model = require('../models/Products2Model');
var router = express.Router();

router.get('/', async(req,res)=>{
    var products2 = await Products2Model.find({});
    res.render('products2/view2', {products2: products2})
});

router.get('/add',  async(req, res) => {
    res.render('products2/newproducts2');
});
router.post('/add', async (req, res) => {
    var product = req.body;
    await Products2Model.create(product);
    res.redirect('/products2');
});

router.get('/delete/:id', async (req, res) => {
    await Products2Model.findByIdAndDelete(req.params.id)
        .then(() => { console.log("Delete toy succeed !") })
        .catch((err) => { console.error("Delete toy fail") })
    res.redirect('/products2');
});

router.get('/edit/:id', async(req,res)=>{
    var product = await Products2Model.findById(req.params.id);
    res.render('products2/editproducts2', {product:product})
});

router.post('/edit/:id', async(req,res)=>{
    var product = await Products2Model.findByIdAndUpdate(req.params.id,req.body);
    res.redirect('/products2');
});

router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    var products2 = await Products2Model.find({ name: new RegExp(keyword, "i") })
    res.render('products2/view2', { products2: products2 })
})
module.exports = router;
