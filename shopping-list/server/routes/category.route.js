const express = require('express')
const { getCat, getCatItems, createcate } = require('../controllers/category.controller')
const router = express.Router()

router 
    .get('/', getCat)
    .get('/catList/:id', getCatItems)
    .post('/createcate', createcate)

module.exports = router
