const express = require('express')
const router = express.Router()

const userController = require('../controllers/userControllers')
const { verifyQR } = require('../services/userServices')

const  middleware = require(".../middlewares/middleware")

router.get('/', userController.getAllUsers)

router.post("/", middleware.verifyUser, userController.verifyUser)

router.post("/verifyQR", middleware.verifyQR, userController.verifyQR)

router.patch("/", userController.updateUser)

router.get("/:name", userController.getOneUser)


module.exports = router;