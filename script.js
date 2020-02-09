//Function to wrap all other functions in
$(document).ready(function(){
  //Search history
  let searchHistory=[];
  $("#submit").click(function (e){
    e.preventDefault();
    const city= $("#city").val();
    searchHistory.push(city)
    $("#lastCities").text(searchHistory)
      if(city !=""){
        //Ajax Call for the city
  $.ajax({
  url: 'https://api.openweathermap.org/data/2.5/forecast?appid=34fd31758b449ea433e05058c225793c&q=' + city + "&units=imperial&count=10",
  type: "GET",
  dataType: "jsonp",
  success: function (data) {
    let window = show(data);
    console.log("here");
    $("#show").html(widget);
    //Five-Day Forecast Window
     const window2 = "";
     for (let i in data.list){
       if (i > 0 && data.list [i].dt_txt.indexOf("11:00") > -1){
         console.log(data.list[i].dt_txt);
         let code = [
            '<div class="col-2">',
            '<p>',
            data.list[i].dt_txt.split('')[0],
            '</p>',
            '<p> Temp:',
            data.list[i].main.temp,
            ' degrees</p>',
            '<p> Humidity: ',
            data.list[i].main.humidity,
            '</p>',
            '<p> Wind speed: ',
            data.list[i].wind.speed,
            ' MPH</p>',
            '</div>'
            ,data.list[i].uv.index,
            ' <p>UV Index</p>',
            '</div>'
          ];
          window2 += code.join('');
        }
       }
       $("#fiveDayForecast").html(window2);
       $("#city").val('');
     }
    });
  } else{
    $("#error").html("Please enter a city");
  }
  });
});
//Function that shows the data on the page
function show(data){
  console.log("show", data);
  return data.city.name + ' (' + data.list[0].dt_txt.split('')[0] +') </h3>'+
  '<p>'Temp: + data.list[0].main.temp +'degrees</p>'+
  '<p>,'humidity: + data.list[0].main.humidity +'%</p>'+
  '<p>'Wind: + data.list[0].main.wind +'MPH</p>'+
  '<p>'UV Index: + data.list[0].main.u +'uv.index'uvIndex</p>'
}

