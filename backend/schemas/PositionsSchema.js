const mongoose = require("mongoose");

const positionsSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: { type: Boolean, default: false },
});

// ✅ Register and export the model
const PositionsModel = mongoose.model("Position", positionsSchema);

module.exports = { PositionsModel };
