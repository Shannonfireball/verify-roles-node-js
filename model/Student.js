const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    userId:String,
    schoolId:String,
    created:String,
    updated:String
});

                         // creating a model
                                 // mongoose will set Employee to lowercase and plural
module.exports = mongoose.model('Student', StudentSchema);