const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;