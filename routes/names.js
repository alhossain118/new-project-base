'use strict'

const express = require('express')
const Name = require('../models/name')
let router = express.Router();

router.route('/')
  .get((req,res) => {
    Name.find({}, (err, names) => {
      res.status(err ? 400 : 200).send(err || names)
    })
  })
  .post((req,res) => {
    Name.create(req.body, (err, name) => {
      res.status(err ? 400 : 200).send(err || name)
    })
  })

router.route('/:id')
    .put((req,res) => {
      Name.findOne(req.params.id, (err, name) => {
        res.status(err ? 400 : 200).send(err)
      })
    })
    .delete((req,res) => {
      Name.findByIdAndRemove(req.params.id, (err) => {
        res.status(err ? 400 : 200).send(err)
      })
    })


module.exports = router;
