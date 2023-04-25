const express = require("express")
const router = express.Router()
const { register, Login ,getUserById, RefreshTokenController, Logout } = require("../controller/UserController")
const { protect, admin } = require("../middlerware/AuthMiddleware")

router.post("/register", register)
router.post("/login", Login)
router.post('/refresh_token', RefreshTokenController)
router.post('/logout', Logout)
router.get("/:_id", getUserById)


module.exports = router
