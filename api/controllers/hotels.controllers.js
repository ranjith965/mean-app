var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;
var jsonData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
    var db = dbconn.get();
    console.log('db',db);

    var collection = db.collection('tech');
    console.log('collections are', collection);

    console.log('GET the hotels');
    
    var offset = 0;
    var count = 10;

    if(req.query && req.query.offset){
      offset = req.query.offset;
    }

    if(req.query && req.query.count){
      count = req.query.count;
    }

    collection
             .find()
             .skip(offset)
             .limit(count)
             .toArray(function(err,data){
               if(err) throw err;
               res
                 .status(200)
                 .json(data);
             });

};

module.exports.hotelsGetOne = function(req, res){
  var db = dbconn.get();
  var collection = db.collection('tech');
  
  var hotelId = req.params.hotelId;

  console.log('GET the hotel ',hotelId );
  collection
    .findOne({
      _id : ObjectId(hotelId)  
    },function(err, doc){
      if(err) throw err;
      res
        .status(200)
        .json(doc);
    });
};

module.exports.hotelsAddOne = function(req, res){
  var db = dbconn.get();
  var collection = db.collection('tech');
  var newHotel;

  if(req.body && req.body.name && req.body.stars){
    newHotel = req.body;
    newHotel.stars = parseInt(req.body.stars, 10);
    
    collection.insertOne(newHotel,function(err,response){
      if(err) throw err;
      console.log(response);
      console.log(response.ops);

      res
        .status(201)
        .json(response.ops);
    });
  } else{
    console.log('Failed to add the hotel');

    res
      .status(500)
      .json({"message" : "unable to add the hotel"});
  }
  
};