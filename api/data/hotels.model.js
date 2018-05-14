var mongoose = require('mongoose');
var hotelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    stars : {
        type : Number,
        min : 0,
        max : 0,
        default : 0
    },
    services : [String],
    description : String,
    photos : [String],
    currency : String
});

mongoose.model('Hotel', hotelSchema);