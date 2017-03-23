$(document).ready(function() {
	
	//Declare global variables for user selection
		var activity = " ";
		var	location = " ";
		

	//List main object with activity and location array
	// var mainObject = {
	// 		spring : ["Hiking", "Dirt Bike Riding", "Rock Climbing"],
	// 		summer : ["Surfing", "Snorkeling" , "Jet Skiing"],
	// 		autumn : ["Wine Tasting", "Oktoberfest"],
	// 		winter : ["Snow Boarding", "Snow Skiing", "Dog Sleding"]
	// 	};

  // var secObject = {
  //     spring: ["Colorado, US", ""],
  //     summer: ["Caribbean", "Mexico", ""],
  //     autumn: ["France", "New Zealand"],
  //     winter : ["Switzerland", "Austria", "Iceland"]
  //    };

  var mainObject = {
                      hiking: {
                                spring : ["Colorado", "Yosemite, CA", "Machu Pichu, Peru"],
                                summer : ["Bryce Canyon National Park"],
                                autumn : ["Asheville, NC", ""],
                                winter: ["Mt. Everest!"],
                      },
                      dirtBikeRiding : {
                                spring : ["Texas"],
                                summer : ["Dubai"],
                                autumn : [],
                                winter: [],
                      },
                      rockClimbing : {
                                spring : [],
                                summer : [],
                                autumn : [],
                                winter: [],
                      },
                      surfing : {
                                spring : ["Hawaii"],
                                summer : ["Huntington Beach,CA"],
                                autumn : ["Costa Rica"],
                                winter: ["Australia"],
                      },
                      snorkeling : {
                                spring : ["Bahamas"],
                                summer : ["Jamaica"],
                                autumn : ["Honduras"],
                                winter: ["Maui, Hawaii"],
                      },
                      jetSkyiing : {
                                spring : ["Miami,FL"],
                                summer : ["Denarau Island, Fiji"],
                                autumn : ["Naples, Italy"],
                                winter: ["The Bay of Islands, New Zealand"],
                      },
                      wineTasting : {
                                spring : ["Napa Valley"],
                                summer : ["Bordeaux, France"],
                                autumn : ["Tuscany, Italy"],
                                winter: ["Barcelona, Spain"],
                      },
                      oktoberfest : {
                                //spring : [],
                                //summer : [],
                                autumn : ["Munich, Germany"],
                                //winter: [],
                      },
                      snowboarding : {
                                spring : ["Colorado"],
                                summer : [""],
                                autumn : [],
                                winter: [],
                      },
                      snowskiing : {
                                spring : [],
                                summer : [],
                                autumn : [],
                                winter: [],
                      },
                      dogSleding : {
                                spring : [],
                                summer : [],
                                autumn : [],
                                winter: [],
                      }

  }
	
	console.log(mainObject);
  console.log(mainObject.hiking.spring[0]);

  //Skyscanner API
  var APIKey1 = "an626175727210946379892487077634"; 

  var queryURL = "https://crossorigin.me/http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/uk/2018-01/2018-03?apikey=" + APIKey1;

  //AJAX call to skycanner API
   $.ajax({
     url: queryURL,
     method: 'GET'
   }).done(function(response) {
     console.log(response);
   }).fail(function  (err){
       console.error('err', err);
   });

   //OpenWeather API

   var APIKey2 = "5159d2e8e1919edfae8b581c792abf98";
   
   var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid="
                    + APIKey2;


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

       // Log the data in the console as well
     
     });


     //receive user input
     // Create a database of cities
     // Concatenate user input into query URLs
     // Return cheapest quotes for top 3 destinations

});


