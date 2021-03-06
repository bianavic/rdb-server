const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  global.db.findAll((e, docs) => {
    if (e) { return console.log(e) }
    res.render('index', { title: 'Lista das Ligas', docs: docs })
  })
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
  const db = require('../db')
  const League = db.Mongoose.model('leagues', db.LeagueSchema, 'leagues')
  League.find({ _id: req.params.id }).lean().exec(function (e, docs) {
    res.json(docs)
    res.end()
  })
})

/* POST ONE league. */
router.post('/leagues/', function (req, res, next) {
  const db = require('../db')
  const League = db.Mongoose.model('leagues', db.LeagueSchema, 'leagues')
  const newleague = new League({ name: req.body.name, email: req.body.email })
  newleague.save(function (err) {
    if (err) {
      res.status(500).json({ error: err.message })
      res.end()
      return
    }
    res.json(newleague)
    res.end()
  })
})

/* PUT ONE league. */
router.put('/leagues/:id', function (req, res, next) {
  const db = require('../db')
  const League = db.Mongoose.model('leagues', db.LeagueSchema, 'leagues')
  League.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
    if (err) {
      res.status(500).json({ error: err.message })
      res.end()
      return
    }
    res.json(req.body)
    res.end()
  })
})

/* DELETE ONE league. */
router.delete('/leagues/:id', function (req, res, next) {
  const db = require('../db')
  const League = db.Mongoose.model('leagues', db.LeagueSchema, 'leagues')
  League.find({ _id: req.params.id }).remove(function (err) {
    if (err) {
      res.status(500).json({ error: err.message })
      res.end()
      return
    }
    res.json({success: true})
    res.end()
  })
})

module.exports = router
