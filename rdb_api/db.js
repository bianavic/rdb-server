/* const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/leagues')

const leagueSchema = new mongoose.Schema({
  league: String,
  foundation: String
}, { collection: 'leagues' }
)

module.exports = { Mongoose: mongoose, LeagueSchema: leagueSchema } */

const mongoClient = require('mongodb').MongoClient
mongoClient.connect('mongodb://localhost/leagues')
  .then(conn => global.conn = conn.db('leagues'))
  .catch(err => console.log(err))

function findAll (callback) {
  global.conn.collection('leagues').find({}).toArray(callback)
}

module.exports = { findAll }
