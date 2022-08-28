const express = require('express')

const controller = require('../controllers/newsControll')

const router = express.Router()

const path = 'news'

router.get(
    `/${path}`,
    controller.getNews
)


router.get(
    `/${path}/:id`,
    controller.getNewsId
)

// router.get(
//     `/lastName`,
//     controller.getNewsDate
// )

router.post(
    `/${path}/insert`,
    controller.postNews
)

router.put(
    `/${path}/:id`,
    controller.putNews
)

router.delete(
    `/${path}/:id`,
    controller.deleteNews
)


module.exports = router