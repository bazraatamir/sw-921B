const mongoose = require("mongoose");
const { transliteration, slugify } = require("transliteration");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },

  size: [
    {
      type: String,
      required: true,
    },
  ],
  images: {
    type: String,
    required: true,
  },
});
productSchema.pre("save", function (next) {
  this.slug = slugify(this.name);
  next();
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
