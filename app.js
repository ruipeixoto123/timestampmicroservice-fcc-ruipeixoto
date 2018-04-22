// imports 
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// Create an instante of express ; instatiate bodyParser and cors
var app = express();
app.use(bodyParser.json());
app.use(cors());

// GET call 
app.get("/:date", function(req, res){
	var date = req.params.date;
	
	// formatting date 
	var dateFormatting = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	if(isNaN(date)){
		var naturalDate = new Date(date);
		naturalDate = naturalDate.toLocaleDateString("en-us", dateFormatting);
		var unixDate = new Date(date).getTime()/1000;
	} else {
		var unixDate = date;
		var naturalDate = new Date(date * 1000);
		naturalDate = naturalDate.toLocaleDateString("en-us", dateFormatting);
	}

	res.json({unix: unixDate, natural: naturalDate});
});




app.listen(3000, function(){
	console.log("Server has started...!");
});