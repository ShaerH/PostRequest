var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Shaer", "Chris", "Garen", "Anneq", "Bob"]

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newfried = req.body.newfriend;
    friends.push(newfried);
   res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
    
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("ServerStared!!");
});