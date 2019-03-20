var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
   res.send("YOU HAVE POST ROUTE");
});

app.get("/friends", function(req, res){
    var friends = ["Shaer", "Chris", "Garen", "Anneq", "Bob"]
    res.render("friends", {friends: friends});
    
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("ServerStared!!");
});