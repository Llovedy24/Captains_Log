const mongoose = require('mongoose')

// make A Schema
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToLog: Boolean
})

// Make A Model From The Schema
const Log = mongoose.model('Log', logSchema)

// Export The Model For Use In The App

module.exports = Log
