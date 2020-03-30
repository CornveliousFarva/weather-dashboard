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
  url: url = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api id here}",
  type: "GET",
  dataType: "jsonp",
  success: function (data) {
    /*
    1. Manipulate the data to get it to do what we want it to do
    2. Fin    
    5. Have it show up in the HTML
    
    */
   //parsed out the temperature from the data
    let temp = data.list[0].main.temp;
    //created a new div to house my data
    let div = $('<div>');
    //selected the the temp class as a place to put my data
    let tempDiv = $('.temp');
    // put my data in my new div
    div.text(temp);
    //put my new div on the page
    tempDiv.append(div);
    // let window = show(data);
    // console.log("here");
    // $("#show").html(widget);
    // //Five-Day Forecast Window
    //  const window2 = "";
    //  for (let i in data.list){
    //    if (i > 0 && data.list [i].dt_txt.indexOf("11:00") > -1){
    //      console.log(data.list[i].dt_txt);
    //      let code = [
    //         '<div class="col-2">',
    //         '<p>',
    //         data.list[i].dt_txt.split('')[0],
    //         '</p>',
    //         '<p> Temp:',
    //         data.list[i].main.temp,
    //         ' degrees</p>',
    //         '<p> Humidity: ',
    //         data.list[i].main.humidity,
    //         '</p>',
    //         '<p> Wind speed: ',
    //         data.list[i].wind.speed,
    //         ' MPH</p>',
    //         '</div>'
    //         ,data.list[i].uv.index,
    //         ' <p>UV Index</p>',
    //         '</div>'
    //       ];
    //       window2 += code.join('');
    //     }
    //    }
    //    $("#fiveDayForecast").html(window2);
    //    $("#city").val('');
     }
    });
  } else{
    $("#error").html("Please enter a city");
  }
  });
});
//Function that shows the data on the page
function show(data){
  console.log("#fiveDayForecast", data);
  return data.city.name + ' (' + data.list[0].dt_txt.split('')[0] +') </h3>'+
  '<p>Temp:' + data.list[0].main.temp +'degrees</p>'+
  '<p>humidity:' + data.list[0].main.humidity +'%</p>'+
  '<p>Wind:' + data.list[0].main.wind +'MPH</p>'+
  '<p>UVIndex:' + data.list[0].main.u +'uv</p>'
}

