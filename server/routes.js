const express = require('express')
const controllers = require('./controllers/controllers')
const router = express.Router()


router.get('/', controllers.root)

router.get('/post', controllers.publish)



module.exports = router
