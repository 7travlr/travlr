$(document).ready(function() {
  
  //Declare global variables for user selection
    var clickedActivity;
    var destination;

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
                      oktoberfest : {
                                autumn : ["Munich, Germany", "Waterloo, Canada"],
                      },
                      snowSports : {
                                spring : ["Breckenridge, Colorado"],
                                summer : ["Swiss Alps"],
                                autumn : ["Hokkaido, Japan"],
                                winter: ["Lake Tahoe"],
                      }

  }
  
  console.log(mainObject);
  console.log(mainObject.hiking.spring[0]);

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
          console.log("Roundtrip flight from " + inbound + " to " + outbound + "! Only $" + bestPrice + ".99!!!");
        }

      }

    }).fail(function  (err){
        console.error('err', err);
    });

    //OpenWeather API

    var APIKey2 = "c8f5da62c7cd9640bb701b098747e434";
    var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey2;


    //Click event for activity selection
    $(".activity").click(function() {
      var clickedActivity = $(this).data("value");
      console.log(clickedActivity);

      if(clickedActivity === "dirtbike"){
      console.log("clicked on dirtbike");
      }
      else if(clickedActivity === "hiking"){
      console.log("clicked on hiking");
      }
      else if(clickedActivity === "rockclimbing"){
      console.log("clicked on rockclimbing");
      }
      else if(clickedActivity === "rockclimbing"){
      console.log("clicked on rockclimbing");
      }
      else if(clickedActivity === "rockclimbing"){
      console.log("clicked on rockclimbing");
      }
      else if(clickedActivity === "rockclimbing"){
      console.log("clicked on rockclimbing");
      }
      else if(clickedActivity === "rockclimbing"){
      console.log("clicked on rockclimbing");
      }
      else if(clickedActivity === "rockclimbing"){
      console.log("clicked on rockclimbing");
      }
      else if(clickedActivity === "rockclimbing"){
      console.log("clicked on rockclimbing");
      }
      else if(clickedActivity === "rockclimbing"){
      console.log("clicked on rockclimbing");
      }
    
    });


    //Hide or Display destinations upon activity selection
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
    });
});


$("#asheville").on("click",function(){
    var queryURL = "https://crossorigin.me/http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/lfta/anytime/anytime?apikey=uc166750652136729269642399717836";
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
        }
      }
          console.log("Roundtrip flight from " + inbound + " to " + outbound + "! Only $" + bestPrice + ".99!!!");
    }).fail(function  (err){
        console.error('err', err);
    });

    var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Asheville,Unitedstates&units=imperial&appid=" + APIKey2;

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

