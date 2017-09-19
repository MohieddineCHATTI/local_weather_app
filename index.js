var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var temp_unit = 'C';
var temp_in_celsius;
var temp_in_fah;
$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
       getWeather(lat,lon);
    
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }


function getWeather(lat, lon) {
  var the_url = api + lat + "&" + lon;
  $.ajax({
    url: the_url, success: function (output) {
      $(".city").text(output.name);
        $(".country").text(output.sys.country);
       temp_in_celsius = Math.round(output.main.temp * 10) / 10;
      $(".temp").text(temp_in_celsius + " " + String.fromCharCode(176));
         $(".desc").text(output.weather[0].main);
        $(".temp_unit").text(temp_unit);
    }
  })
    
    // change temp unit
    $('.btn').on("click",function(){
        if (temp_unit=='C'){
            temp_unit='F';
            $(".unit_of_temp").text("celsius");
            temp_in_fah= temp_in_celsius*9/5+32
            $(".temp_unit").text(temp_unit);
             $(".temp").text(temp_in_fah + " " + String.fromCharCode(176));
        }
        else
      {
          temp_unit="C";
          $(".unit_of_temp").text("fahrenheit");
            $(".temp_unit").text(temp_unit);
           $(".temp").text(temp_in_celsius + " " + String.fromCharCode(176));
    }
        
    }
    
    
    )
}

});