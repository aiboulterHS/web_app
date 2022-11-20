const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.render('home');
  });

app.get("/page_1", function(req, res){
  res.render('page_1');
  });

app.get("/page_2", function(req, res){
  res.render('page_2');
  });

app.get("/page_3", function(req, res){
  res.render('page_3');
  });
  
app.listen(3000, function()
  {console.log("Server started on port 3000");}
);

app.set("view engine", "ejs");