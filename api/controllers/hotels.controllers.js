var dbconn = require('../data/dbconnection.js');
var jsonData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
    var db = dbconn.get();
    console.log('db',db);
    
    console.log('GET the hotels');
    console.log(req.query);
    
    var offset = 0;
    var count = 10;

    if(req.query && req.query.offset){
      offset = req.query.offset;
    }

    if(req.query && req.query.count){
      count = req.query.count;
    }

    var returnData = jsonData.slice(offset, offset + count);

    res
      .status(200)
      .json(returnData);
};

module.exports.hotelsGetOne = function(req, res){
  var hotelId = req.params.hotelId;
  var thisHotel = jsonData[hotelId];

  console.log('GET the hotel ',hotelId );
  res
    .status(200)
    .json(thisHotel);
};

module.exports.hotelsAddOne = function(req, res){
  console.log('POST the hotel');

  res
    .status(200)
    .json(req.body);
};