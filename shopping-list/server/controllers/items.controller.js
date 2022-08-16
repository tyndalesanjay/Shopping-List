const { JSONResponse } = require('../lib/helper')
const Items = require('../models/items.model')

/**
 * ### Description
 * Get all items
 */
exports.getAllItems = async (req, res) => {
	try {
		const items = await Items.find()
        JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
	}
}

/**
 * ### Description
 * Creating an item
 */
exports.createItem = async (req, res) => {
	try {
		const items = await Items.create(req.body)
		JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
	}
}

/*
	####Description
	Get Item By Id
*/

exports.getItemById =  async (req, res) => {
	try {
		let items = await Items.findById(req.params.id)
		JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}

/*
	###Description
	Update Items
*/

exports.updateItem = async(req, res, next) => {
	try {
		let items = await Items.updateOne(req.param.id, req.body)
		JSONResponse.success(res, 'Success', items, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}

/**
 * ### Description
 * Deleting items from list
 */
exports.deleteItemsById = async (req, res) => {
	try {
		const item = await Items.findById(req.params.id)
		if (item) await item.delete()
		JSONResponse.success(res, 'Success.', item, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}
