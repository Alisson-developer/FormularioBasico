const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')

const routes = express.Router()

const upload = multer(uploadConfig)

const SessionController = require('./controller/sessionController')

routes.post('/sessions', upload.single('thumbnail'), SessionController.store)


module.exports = routes
