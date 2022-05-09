const mongoose = require('mongoose')
const { Schema } = mongoose

//build a schema
const minifiedUrlSchema = new Schema(
   {
      originalUrl: {
         type: String,
         required: true,
      },
      alias: {
         type: String,
         required: true,
         unique: true,
      },
      minifiedUrl: {
         type: String,
         required: true,
      },
      views: {
         type: Number,
      },
      createdBy: {
         type: String,
         default: 'Anonymous',
      },
      viewedFrom: {
         UKN: { type: Number, default: 0 },
         NA: { type: Number, default: 0 },
         SA: { type: Number, default: 0 },
         EU: { type: Number, default: 0 },
         AS: { type: Number, default: 0 },
         AF: { type: Number, default: 0 },
         OC: { type: Number, default: 0 },
      },
   },
   { timestamps:{createdAt :"created_at"} }
)
//make a model using this schema and export it
module.exports = mongoose.model('minified_url_model', minifiedUrlSchema)
