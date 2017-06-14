//include dependency modules
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');
//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
//var db = mongoose.connection;

//set routes
//default
app.get('/',function(req,res){
    res.send('please use /api/books or /api/genres');
});

//api/genres
app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,res2){
        if (err)
            throw err;
        res.json(res2);
    });
});

app.post('/api/genres',function(req,res){
    Genre.addGenre(req.body,function(err,res2){
        if (err)
            throw err;
        res.json(res2);
    });
});

app.put('/api/genres/:id',function(req,res){
    Genre.updateGenre(req.params.id, req.body, {}, function(err,res2){
        if (err)
            throw err;
        res.json(res2);
    });
});

app.delete('/api/genres/:id',function(req,res){
    Genre.removeGenre(req.params.id, function(err,res2){
        if (err)
            throw err;
        res.json(res2);
    });
});


//api/books
app.get('/api/books',function(req,res){
    Book.getBooks(function(err,res2){
        if (err)
            throw err;
        res.json(res2);
    });
});
app.post('/api/books',function(req,res){
    Book.addBook(req.body,function(err,res2){
        if (err)
            throw err;
        res.json(res2);
    });
});
app.put('/api/books/:id',function(req,res){
    Book.updateBook(req.params.id, req.body, {}, function(err,res2){
        if (err)
            throw err;
        res.json(res2);
    });
});
app.delete('/api/books/:id',function(req,res){
    Book.removeBook(req.params.id, function(err,res2){
        if (err)
            throw err;
        res.json(res2);
    });
});

//api/books/id
app.get('/api/books/:id',function(req,res){
    Book.getBookById(req.params.id, function(err,res2){
        if (err)
            throw err;
        res.json(res2);
    });
});

app.listen(3000);
console.log('server run on port 3000');