const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema
({
    name: String,
    price: String,
    pictureURL: String,
    brand: String
});
const ProductsModel = mongoose.model("products", ProductSchema, "products");
module.exports = ProductsModel;