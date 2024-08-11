import express from "express"
import { addOrder, getAllOrders, getUserOrders } from "../controller/order.controller.js"

const router = express.Router()


router.post('/order',addOrder)

router.get('/orders',getAllOrders)

router.get('/user/orders', getUserOrders)

export default router