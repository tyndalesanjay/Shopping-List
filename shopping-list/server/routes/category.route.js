const express = require('express')
const { getCat, getCatItems, createcate, updatecate, deletecat } = require('../controllers/category.controller')
const router = express.Router()

router 
    .get('/', getCat)
    .post('/createCate', createcate)
    
router
    .get('/catList/:id', getCatItems)
    .post('/updateCate/:id', updatecate)
    .get('/delete/:id', deletecat)


module.exports = router
