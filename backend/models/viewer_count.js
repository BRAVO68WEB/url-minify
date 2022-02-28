const mongoose = require('mongoose')
const { Schema } = mongoose

//Visitor count Schema
const viewerSchema = new mongoose.Schema({
    name: String,
    count: Number
})

module.exports = mongoose.model('viewers', viewerSchema)