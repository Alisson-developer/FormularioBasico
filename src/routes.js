const express = require('express')

const routes = express.Router()



const SessionController = require('./controller/sessionController')

routes.post('/sessions', SessionController.store)


module.exports = routes
