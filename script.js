const city = "London";

let weather = {
  apiKey: "dba7d7b658e0ea9699b67a8ae8aabb6a",
  weatherFetch: function (city) {
    fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q="+ city +"&limit=5&appid="+this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch(function (error) {
        console.log("error", error);
      });
  },

  displayWeather: function (data) {
    const lat = data[0].lat;
    const lon = data[0].lon;
    console.log(data);
    return fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
};
weather.weatherFetch(city);
