const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));


app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
	var fnum = Number(req.body.num1);
	var lnum = Number(req.body.num2);
	var rnum = fnum + lnum;
	console.log(rnum);
	res.send( "The sum of your calculation is " + rnum);
	
});



















app.listen(3000, function(){
	console.log("oh yes! server is running");
});
