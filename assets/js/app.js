$(document).ready(function() {
	
	//Declare global variables for user selection
		var activity,
			location,
			season;
		

	//List main object with activity and location array
	var mainObject {
			activities = {
				outdoorsy =  ["hiking", "dirt bike riding", "rock climbing"], 

	}


	console.log(mainObject);
	//Concactenate user selection to query URLs
	var queryURL = "https://crossorigin.me/http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/FR/eur/en-US/uk/us/anytime/anytime?apikey=prtl6749387986743898559646983194";

	//Ajax call
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	
	//Append or log to HTML

};


