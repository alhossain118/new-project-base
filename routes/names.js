'use strict'

const express = require('express')
let router = express.Router();

router.route('/')
  .get((req,res) => {
    res.send('names route\n')
  })



module.exports = router;
