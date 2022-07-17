const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schoolSchema = new Schema({
    name:String,
    city:String,
    state:String,
    country:String
});


module.exports = mongoose.model('School', schoolSchema);