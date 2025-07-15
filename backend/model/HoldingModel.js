const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");

// ✅ Remove the `new` keyword here
const HoldingModel = model("holding", HoldingSchema);

module.exports = { HoldingModel };
