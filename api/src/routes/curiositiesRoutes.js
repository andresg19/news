const express = require('express')

const controller = require('../controllers/curiositiesControll')

const router = express.Router()

const path = 'curiosities'

router.get(
    `/${path}`,
    controller.getCurious
)


router.get(
    `/${path}/:id`,
    controller.getCuriousId
)

router.post(
    `/${path}/insert`,
    controller.postCurious
)

router.put(
    `/${path}/:id`,
    controller.putCurious
)

router.delete(
    `/${path}/:id`,
    controller.deleteCurious
)


module.exports = router