const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

//Check connection
db.once('open',function(){
  console.log('Connected to MongoDB');
});

//Check for DB Errors:
db.on('error',function(err){
  console.log(err);
});

//Init App
const app = express();

//Load View Engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
//Pass values to the templates or views
app.get('/',function(req, res){
  let articles = [
    {
      id:1,
      title: 'Node JS',
      author: 'Deep Kumar Roy',
      body: 'This is Article One',
    },
    {
      id:2,
      title: 'React JS',
      author: 'Ayan Khaskel',
      body: 'This is Article Two',
    },
    {
      id:3,
      title: 'Angular JS',
      author: 'Devraj Roy',
      body: 'This is Article Three',
    },
  ]
  res.render('index4',{
    title:'Articles',
    articles: articles
  });
});

//Add Route
app.get('/articles/add', function(req, res){
  res.render('add_article1',{
    title:'Add Articles'
  });
});

//Start Server
app.listen(3000, function(){
  console.log('Server Started on port 3000...')
});
