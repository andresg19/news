const express = require('express')

const controller = require('../controllers/usersControll')

const router = express.Router()

const path = 'users'

router.post(
    `/${path}/insert`,
    controller.postUsers
)

router.post(
    `/${path}/log`,
    controller.postLog
)

module.exports = router
