//fetch
//fetch is a browser api that is not part of the javascript language

function getWeather(woeid) {

  //in here we need to pass in the URL where the API is located
  //the fetch gets the data for us and returns a promise without us having to write it ourselves
  fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
    //then data from the ajax called from fetch will be called result here
    .then(result => {
      console.log(result);
      //this will return a promise because this is actaully done asynchronously
      return result.json();
    })
    .then(data => {
      const today = data.consolidated_weather[0];
      console.log(`Tempratures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
    })
    .catch(error => console.log(error));

}

getWeather(2487956);
getWeather(44418);