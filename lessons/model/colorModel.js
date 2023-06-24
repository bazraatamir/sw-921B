const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;
