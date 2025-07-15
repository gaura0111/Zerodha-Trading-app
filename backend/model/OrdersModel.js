const { model } = require("mongoose");

const {OrdersSchema} = require("../schemas/OrderSchema");

const OrdersModel = new model("Order" , OrdersSchema);

module.exports = {OrdersModel};