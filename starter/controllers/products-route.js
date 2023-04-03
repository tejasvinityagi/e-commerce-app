const express = require("express")
const router = express.Router()
const {getAllProducts, getOneproduct, addProduct,deleteProduct, updateProduct, } = require('./products_controlller')







router.get('/', getAllProducts)
router.get('/', getOneproduct)
router.post('/',addProduct)
router.delete('/',deleteProduct)
router.update('/', updateProduct)
exports.module()