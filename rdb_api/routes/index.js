const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET all leagues. */
router.get('/leagues', function (req, res, next) {
  const db = require('../db')
  const League = db.Mongoose.model('leagues', db.LeagueSchema, 'leagues')
  League.find({}).lean().exec(function (e, docs) {
    res.json(docs)
    res.end()
  })
})

/* GET ONE league. */
router.get('/leagues/:id', function (req, res, next) {
  var db = require('../db')
  var League = db.Mongoose.model('leagues', db.LeagueSchema, 'leagues')
  League.find({ _id: req.params.id }).lean().exec(function (e, docs) {
    res.json(docs)
    res.end()
  })
})

module.exports = router
