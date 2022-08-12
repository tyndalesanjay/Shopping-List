const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let itemsSchema = new Schema({
	categoryID: { type: Schema.Types.ObjectId, ref: "category" },
	item_name: { type: String, required: true },
	price: { type: Number, required: true },
	quantity: { type: Number, required: true },
})

module.exports = mongoose.model('item', itemsSchema)
