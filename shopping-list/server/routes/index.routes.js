const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	deleteItemsById,
	getAllItems,
	getItemById,
	updateItem,
} = require('../controllers/items.controller')

router
	.get('/', IndexController.index)
	.post('/shopping_add', createItem)
	.get('/shoppingList', getAllItems)

router
	.get('/listItem/:id', getItemById)
	.patch('/update_item/:id', updateItem)
	.delete('/delete/:id', deleteItemsById )

module.exports = router
