const { JSONResponse } = require('../lib/helper')
const categoryModel = require('../models/category.model');
const itemsModel = require('../models/items.model');

exports.getCat = async (req, res, next) => {
    try {
        let categories = await categoryModel.find();
        JSONResponse.success(res, 'Success.', categories, 200)
    } catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
    }
    next()
}

exports.getCatItems = async (req, res) => {
    try {
        const items = await itemsModel.find({categoryID: req.params.id}).populate('categoryID')
        JSONResponse.success(res, 'Success.', items, 200)
    } catch (error) {
        JSONResponse.error(res, "Failure handling item model.", error, 500)
        console.log(error)
    }
}

exports.createcate = async (req, res, next) => {
    let data = {
        category: req.body.category
    }
    try {
        let create = await categoryModel.create(data)
        JSONResponse.success(res, 'Success.', create, 200)
    } catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
        console.log(error)
    }
}

exports.getCatById = async(req, res) => {
    try {
        let categories = await categoryModel.findById(req.params.id)
        JSONResponse.success(res, 'Success', categories, 200)
    } catch (error) {
        JSONResponse.error(res, "Failure handling model", error, 500)
    }
}

exports.updatecate = async (req, res, next) => {
    let data ={
        category: req.body.category
    }
    try {
        let update = await categoryModel.findByIdAndUpdate(req.params.id, data)
        JSONResponse.success(res, 'Success', update, 200)
    } catch (error) {
        JSONResponse.error(res, "Failure handling item model.", error, 500)
        console.log(error)
    }
}

exports.deletecat = async (req, res, next) => {
    try {
        const deletecat = await categoryModel.findOneAndDelete(req.params.id)
        JSONResponse.success(res, 'Success', deletecat, 200)
    } catch (error) {
        JSONResponse.error(res, "Failure handling item model.", error, 500)
        console.log(error)
    }
}

