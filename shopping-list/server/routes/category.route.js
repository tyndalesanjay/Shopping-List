const express = require('express')
const { getCat, getCatItems, createcate, updatecate, deletecat, getCatById } = require('../controllers/category.controller')
const router = express.Router()

router 
    .get('/', getCat)
    .post('/createCate', createcate)
    
router
    .get('/catList/:id', getCatItems)
    .get('/getById/:id', getCatById)
    .put('/updateCate/:id', updatecate)
    .delete('/delete/:id', deletecat)


module.exports = router
