const { model } = require('mongoose');

const {OrderSchema} = require('../Schemas/OrderSchema');

const OrderModel = model('order', OrderSchema);

module.exports = {OrderModel};