const mongoose = require('mongoose');
const Product2Schema = mongoose.Schema({
    name: String,
    price: String,
    pictureURL: String,
    brand: String
});
const Products2Model = mongoose.model("products2", Product2Schema, "products2");
module.exports = Products2Model;