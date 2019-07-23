const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/leagues')

const leagueSchema = new mongoose.Schema({
  league: String,
  email: String
}, { collection: 'leagues' }
)

module.exports = { Mongoose: mongoose, LeagueSchema: leagueSchema }
