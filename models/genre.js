var mongoose = require('mongoose');
//define Schema
var genreSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        default:Date.now
    }
});

//exports database model for table genre
var Genre = module.exports = mongoose.model("genres",genreSchema);

//exports function

// get Genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
};

// add Genre
module.exports.addGenre = function(genreObj, callback){
    Genre.create(genreObj, callback);
};

// update Genre
module.exports.updateGenre = function(id, genreObj, option, callback){
    var condition = {_id:id};
    var updateObj = {name: genreObj.name};
    Genre.findOneAndUpdate(condition, updateObj, option, callback);
};

// remove Genre
module.exports.removeGenre = function(id, callback){
    var condition = {_id:id};    
    Genre.remove(condition, callback);
};