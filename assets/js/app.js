$(document).ready(function() {
  
  //Declare global variables for user selection
    var clickedActivity;
    var destination;

    var mainObject = {
                      hiking: {
                                spring : ["./assets/images/hiking_colorado.jpg", "./assets/images/hiking_yosemite.jpg", "./assets/images/hiking_machupichu"],
                                summer : ["./assets/images/hiking_brycecanyon"],
                                autumn : ["./assets/images/hiking_asheville"],
                                winter: ["./assets/images/hiking_everest.jpg"],
                      },
                      dirtBikeRiding : {
                                spring : ["./assets/images/dirtbike_texas.jpg"],
                                summer : ["./assets/images/dirthbikes_dubai.jpg"],
                                autumn : ["./assets/images/dirtbike_mojavedesert.jpg"],
                                winter: ["./images/hiking_wales.jpg"],
                      },
                      rockClimbing : {
                                spring : ["./images/rockclimbing_kentucky.jpg"],
                                summer : ["./images/rockclimbing_bavariagermany.jpg"],
                                autumn : ["./images/rockclimbing_greece.jpg"],
                                winter: ["./images/rockclimbing_mexico.jpg"],
                      },
                      surfing : {
                                spring : ["./images/surfing_hawaii.jpg"],
                                summer : ["./images/surfing_cali.jpg"],
                                autumn : ["./images/surfing_costarica.jpg"],
                                winter: ["./images/surfing_australia.jpg"],
                      },
                      snorkeling : {
                                spring : ["./images/snorkeling_bahamas.jpg"],
                                summer : ["./images/snorkeling_jamaica.jpg"],
                                autumn : ["./images/snorkeling_honduras.jpg"],
                                winter: ["./images/snorkeling_maui.jpg"],
                      },
                      jetSkiing : {
                                spring : ["./images/jetskiing_miami.jpg"],
                                summer : ["./images/jetskiing_fiji.jpg"],
                                autumn : ["./images/jetskiing_italy.jpg"],
                                winter: ["./images/jetskiing_newzealand.jpg"],
                      },
                      oktoberfest : {
                                autumn : ["./images/oktoberfest_germany.jpg", "/images/oktoberfest_canada.jpg"],
                      },
                      snowSports : {
                                spring : ["./images/snowsports_colorado.jpg"],
                                summer : ["./images/snowsports_swissalps.jpg"],
                                autumn : ["./images/snowsports_japan.jpg"],
                                winter: ["./images/snowsports_laketahoe.jpg"],
                      },

  }
  
  console.log(mainObject);
  console.log(mainObject.dirtBikeRiding.spring[0]);

  //Skyscanner API
    var APIKey1 = "166750652136729269642399717836";

    var queryURL = "https://crossorigin.me/http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/fr/2018-01/2018-03?apikey=uc" + APIKey1;

    //AJAX call to SkyScanner API
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      console.log(response.Places[0].Name);
      console.log(response.Quotes[0].MinPrice);
      var bestPrice = response.Quotes[0].MinPrice;

      //For-loop to grab cheapest ticket from Skycanner API
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

      //For-loop to grab place Id from Skycanner API
      for (var j = 0; j < response.Places.length-1; j++){
        var currentPlaceId = response.Places[j].PlaceId;
        var currentInboundId = response.Places[j].PlaceId;
        if (currentPlaceId === bestPlaceId){
        var outbound = response.Places[j].Name;
        }
        if (currentInboundId === inboundId){
          var inbound = response.Places[j].Name;
        }
        }
        $(".flightinfo").append("Roundtrip flight from " + inbound + " to Denver, Colorado ! Only $" + bestPrice + ".99!!!");
        

    }).fail(function  (err){
        console.error('err', err);
    });

    //OpenWeather API

    var APIKey2 = "c8f5da62c7cd9640bb701b098747e434";
    var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Denver,Colorado&units=imperial&appid=" + APIKey2;


      //AJAX call to OpenWeather API
      $.ajax({
        url: queryURL2,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {
        // Log the resulting object
        console.log(response);
        
    $("#colorado").click(function() {
      $(".weatherinfo").append("<h1>" + response.name + " Weather Details</h1>");
      $(".weatherinfo").append("<h3> Temperature (F) " + response.main.temp + "</h3>");
      $(".weatherinfo").append("<h3> Humidity: " + response.main.humidity + "</h3>");
      $(".weatherinfo").append("<h3> Wind Speed: " + response.wind.speed + "</h3>");
    });
       
      });


    //Click event for activity selection
    $(".activity").click(function() {
      var clickedActivity = $(this).data("value");
      var seasonClicked = $("#sel1").val().trim()

      console.log(clickedActivity, seasonClicked);


      if(clickedActivity === "hiking" & seasonClicked === "Spring"){
        console.log("clicked on hiking");
        $(".itemSpring").append('<img src="' + mainObject.hiking.spring[0] + '">');
      }
      else if(clickedActivity === "hiking" & seasonClicked === "Spring"){
        console.log("clicked on hiking");
        $(".itemSpring").append('<img src="' + mainObject.hiking.spring[1] + '">');
      }
      else if(clickedActivity === "hiking" & seasonClicked === "Summer"){
        console.log("clicked on hiking");
        $(".itemSpring").append('<img src="' + mainObject.hiking.summer[0] + '">');
      }
      else if(clickedActivity === "hiking" & seasonClicked === "Autumn"){
        console.log("clicked on hiking");
        $(".itemSpring").append('<img src="' + mainObject.hiking.autumn[0] + '">');
      }
      else if(clickedActivity === "hiking" & seasonClicked === "Winter"){
        console.log("clicked on hiking");
        $(".itemSpring").append('<img src="' + mainObject.hiking.winter[0] + '">');
      }
      else if(clickedActivity === "dirtbike" & seasonClicked === "Spring"){
        console.log("clicked on hiking");
        $(".itemSpring").append('<img src="' + mainObject.dirtBikeRiding.spring[0] + '">');
      }
      else if(clickedActivity === "dirtbike" & seasonClicked === "Summer"){
        console.log("clicked on hiking");
        $(".itemSpring").append('<img src="' + mainObject.dirtBikeRiding.summer[0] + '">');
      }
      else if(clickedActivity === "dirtbike" & seasonClicked === "Autumn"){
        console.log("clicked on dirtbike");
        $(".itemSpring").append('<img src="' + mainObject.dirtBikeRiding.autumn[0] + '">');
      }
      else if(clickedActivity === "dirtbike" & seasonClicked === "Winter"){
        console.log("clicked on dirtbike");
        $(".itemSpring").append('<img src="' + mainObject.dirtBikeRiding.winter[0] + '">');
      }
    
    });

});

// On click for activity images
$('img').click(function(){
  $('.selected').removeClass('selected'); // removes the previous selected class
   $(this).addClass('selected'); // adds the class to the clicked image
})

     //receive user input
     // Create a database of cities
     // Concatenate user input into query URLs
     // Return cheapest quotes for top 3 destinations

