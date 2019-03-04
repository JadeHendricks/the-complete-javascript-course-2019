//Making AJAX calls with fetch and async await

async function getWeatherAW (woeid) {
  //it will try to execute the code
  try {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
    //we can await here again because result returns a promise
    const data = await result.json();
    const tomorrow = data.consolidated_weather[1];
    console.log(`Tempratures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);

    return data;
  } 
  //if there is a error it will jump to this part
  catch (error) {
    console.log(error);
  }
}

let dataLondon;
getWeather(2487956).then(data => {
  dataLondon = data
  console.log(dataLondon);
});


getWeather(44418);