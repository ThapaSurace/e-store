import express from 'express'
import { login, logout, register } from '../controller/auth.controller.js'

const router = express.Router()

//register user
router.post('/auth/register', register)

//login user
router.post('/auth/login', login)

//logout user
router.post('/auth/logout', logout)

export default router