import express from "express"
import { addProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controller/product.controller.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

router.post('/product', addProduct)

router.get('/products',getAllProducts)

router.get('/product/:id',getSingleProduct)

router.put('/product/:id',updateProduct)

router.delete('/product/:id',deleteProduct)

export default router