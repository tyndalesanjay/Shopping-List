const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let itemsSchema = new Schema({
	category: { type: String, required: true },
	item_name: { type: String, required: true },
	price: { type: Number, required: true },
	quantity: { type: Number, required: true },
})

module.exports = mongoose.model('item', itemsSchema)
