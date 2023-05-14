const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

categorySchema.virtual("products", {
  ref: "product",
  localField: "_id",
  foreignField: "category",
  justOne: false,
});

module.exports = mongoose.model("category", categorySchema);
