$(document).ready(function() {
  
  //Declare global variables for user selection
    var activity = " ";
    var location = " ";
  

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
                                autumn : ["Mojave Desert, CA"],
                                winter: ["Wales"],
                      },
                      rockClimbing : {
                                spring : ["Stanton, Kentucky"],
                                summer : ["Bavaria, Germany"],
                                autumn : ["Kalymnos Island, Greece"],
                                winter: ["Nuevo Leon, Mexico"],
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
                      jetSkiing : {
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
                                autumn : ["Munich, Germany", "Waterloo, Canada"],
                      },
                      snowSports : {
                                spring : ["Breckenridge, Colorado"],
                                summer : ["Swiss Alps"],
                                autumn : ["Hokkaido, Japan"],
                                winter: ["Lake Tahoe"],
                      },
                      skyDiving : {
                                spring : ["Palm Jurmeirah, Dubai"],
                                summer : ["Pattaya, Thailand"],
                                autumn : ["Snohomish, Washington"],
                                winter : ["Sydney, Australia"],
                      }

  }
  
  console.log(mainObject);
  console.log(mainObject.hiking.spring[0]);

  //Skyscanner API
    var queryURL = "https://crossorigin.me/http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/fr/2018-01/2018-03?apikey=uc166750652136729269642399717836";

    var APIKey2 = "166a433c57516f51dfab1f7edaed8413";

    // Here we are building the URL we need to query the database
    var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey2;


    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      console.log(response.Places[0].Name);
      console.log(response.Quotes[0].MinPrice);
      var bestPrice = response.Quotes[0].MinPrice;


      for (var i = 0; i <= response.Quotes.length-1; i++) {
        var currentPrice = response.Quotes[i].MinPrice;
        var bestPlaceId = response.Quotes[0].OutboundLeg.DestinationId;
        var inboundId = response.Quotes[0].InboundLeg.DestinationId;

        if (currentPrice <= bestPrice){
         bestPrice = currentPrice;
         bestPlaceId = response.Quotes[i].OutboundLeg.DestinationId;
         inboundId = response.Quotes[i].InboundLeg.DestinationId;
         console.log(bestPrice);
        }


      }
      for (var j = 0; j < response.Places.length-1; j++){
        var currentPlaceId = response.Places[j].PlaceId;
        var currentInboundId = response.Places[j].PlaceId;
        if (currentPlaceId === bestPlaceId){
        var outbound = response.Places[j].Name;
        }
        if (currentInboundId === inboundId){
          var inbound = response.Places[j].Name;
          console.log("Roundtrip flight from " + inbound + " to " + outbound + "! Only $" + bestPrice + ".99!!!");
        }

      }

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

       // Transfer content to HTML

       // Log the data in the console as well
     
     });


     //receive user input
     // Create a database of cities
     // Concatenate user input into query URLs
     // Return cheapest quotes for top 3 destinations

