const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const roleSchema = new Schema({
    name:String,
    scopes:[{type:String}],
    created:String,
    updated:String
});


module.exports = mongoose.model('Role', roleSchema);