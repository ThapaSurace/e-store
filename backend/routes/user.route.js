import express from 'express'
import { deleteUser, getAllUsers, getSingleUser } from '../controller/user.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

//get all users
router.get('/users', verifyToken ,getAllUsers)

//get single user
router.get('/user/:id', getSingleUser)

//delete user
router.delete('/user/:id', deleteUser)

export default router