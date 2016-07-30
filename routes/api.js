'use strict'

const express = require('express')
let app = express();
let router = express.Router()




router.use('/names', require('./names'))




module.exports = router
