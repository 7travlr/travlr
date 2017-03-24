$(document).ready(function() {
	
	//Declare global variables for user selection
		var activity = "";
		var	location = "";
		

	//List main object with activity and location array
	var mainObject = {
			spring : ["hiking", "dirt bike riding", "rock climbing"],
			summer : ["Surfing", "Snorkeling" , "Jet skiing"],
			autumn : ["Wine Tasting", "Beer Tasting", "Coffee Tours"],
			winter : ["Snow Boarding", "Snow Skiing", "Snow Biking", "Snow Sledding", "Sled Dog Racing"]
		};

  var mainObject = [{
       snowboarding: ["Colorado", "Aspen"],
       kayaking: ["location"],
       snorkeling: ["Australia", "New Zealand"],
     }];
	
	console.log(mainObject);
  console.log(mainObject[0].kayaking[0]);
  console.log(mainObject[0].snorkeling[1]);

   var queryURL = "https://crossorigin.me/http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/uk/2018-01/2018-03?apikey=uc166750652136729269642399717836";

   var APIKey2 = "166a433c57516f51dfab1f7edaed8413";

   // Here we are building the URL we need to query the database
   var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?" +
     "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey2;

//browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}


   $.ajax({
     url: queryURL,
     method: 'GET'
   }).done(function(response) {
     console.log(response);
   }).fail(function  (err){
       console.error('err', err);
   });


   var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?" +
     "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey2;


   // Here we run our AJAX call to the OpenWeatherMap API
   $.ajax({
       url: queryURL2,
       method: "GET"
     })
     // We store all of the retrieved data inside of an object called "response"
     .done(function(response) {
       // Log the resulting object
       console.log(response);

       // Transfer content to HTML
       $(".city").html("<h1>" + response.name + " Weather Details</h1>");
       $(".wind").html("Wind Speed: " + response.wind.speed);
       $(".humidity").html("Humidity: " + response.main.humidity);
       $(".temp").html("Temperature (F) " + response.main.temp);

       // Log the data in the console as well
       console.log("Wind Speed: " + response.wind.speed);
       console.log("Humidity: " + response.main.humidity);
       console.log("Temperature (F): " + response.main.temp);
     });

   $("#noSlider").hide();


   $("#submitplease").on('click', function () {
       var seasonClicked = $("#sel1").val().trim()
        console.log(seasonClicked);
       $("#slider").remove();
       $("#noSlider").show();

       if(seasonClicked === "Spring"){
           $(".itemSpring1").show();
       console.log("testing");
           $(".itemSummer1").hide();
           $(".itemAutumn1").hide();
           $(".itemWinter1").hide();
       }
       if(seasonClicked === "Summer"){
           console.log("testing2");
           $(".itemSummer1").show();
           $(".itemAutumn1").hide();
           $(".itemWinter1").hide();
           $(".itemSpring1").hide();
       }
       $("#noSlider").show();
       if(seasonClicked === "Autumn"){
           $(".itemAutumn1").show();
           $(".itemSpring1").hide();
           $(".itemSummer1").hide();
           $(".itemWinter1").hide();
       }
       $("#noSlider").show();
       if(seasonClicked === "Winter"){
           $(".itemWinter1").show();
           $(".itemSpring1").hide();
           $(".itemSummer1").hide();
           $(".itemAutumn1").hide();
       }

   })

     //declare global variables
     //recieve user input
       // location?
     // Create a database of cities
     // Concatenate user input into query URLs
     // Return cheapest quotes for top 3 destinations

});


