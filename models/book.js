var mongoose = require('mongoose');
//define Schema
var bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    genre:{
        type:String,
        required:true
    },
    pages:{
        type:String
    },
    publisher:{
        type:String        
    },
    buyUrl:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },

    createDate:{
        type:Date,
        default:Date.now
    }
});

//exports database model for table genre
var Book = module.exports = mongoose.model("books",bookSchema);

//exports functions

//get Books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
};

//add Book
module.exports.addBook = function(bookObj, callback){
    Book.create(bookObj,callback);
};

//get Book by id
module.exports.getBookById = function(id, callback){
    Book.findById(id,callback);
};

//update Book
module.exports.updateBook = function(id, bookObj, option, callback){
    var condition = {_id:id};
    var updateObj = {
        title:bookObj.title,
        author:bookObj.author,
        description:bookObj.description,
        genre:bookObj.genre,
        pages:bookObj.pages,
        publisher:bookObj.publisher,
        buyUrl:bookObj.buyUrl,
        imageUrl:bookObj.imageUrl
    };
    Book.findOneAndUpdate(condition, updateObj, option, callback);
};

// remove Book
module.exports.removeBook = function(id, callback){
    var condition = {_id:id};    
    Book.remove(condition, callback);
};