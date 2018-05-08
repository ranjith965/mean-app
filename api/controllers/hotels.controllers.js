var jsonData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
    console.log('GET the hotels');
    res
      .status(200)
      .json(jsonData);
};

module.exports.hotelsGetOne = function(req, res){
  var hotelId = req.params.hotelId;
  var thisHotel = jsonData[hotelId];

  console.log('GET the hotel ',hotelId );
  res
    .status(200)
    .json(thisHotel);
};