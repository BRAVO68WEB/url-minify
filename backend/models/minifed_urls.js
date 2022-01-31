import mongoose from 'mongoose';
const { Schema } = mongoose;

//build a schema
const minifiedUrlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    minifiedUrl: {
        type: String,
        required: true
    },
    views: {
        type: Number
    },
    createdAt: Number,
    updatedAt: Number

});
//make a model using this schema and export it
exports.default = mongoose.model('minified_url_model', minifiedUrlSchema);