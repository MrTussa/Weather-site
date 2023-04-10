let weather = {
  apiKey: "dba7d7b658e0ea9699b67a8ae8aabb6a",
  weatherGeo: function (city) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=5&appid=" +
        this.apiKey
    );
    xhr.onload = function () {
      const responce = JSON.parse(xhr.responseText);
      weather.weatherFetch(responce);
    };
    xhr.send();
  },

  weatherFetch: function (data) {
    const lat = data[0].lat;
    const lon = data[0].lon;
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        this.apiKey +
        "&units=metric"
    );
    xhr.onload = function () {
      const responce = JSON.parse(xhr.responseText);
      weather.displayWeather(responce);
    };
    xhr.send();
  },

  displayWeather: function (data) {
    const { name, weather, main, wind } = data;
    const { icon, description } = weather[0];
    const { temp, humidity } = main;
    const { speed } = wind;
    const cityElement = document.querySelector(".city");
    const tempElement = document.querySelector(".temp");
    const descElement = document.querySelector(".weather__desc");
    const windElement = document.querySelector(".wind");
    const humidityElement = document.querySelector(".weather__humidity");
    const iconElement = document.querySelector(".weather__icon");
    const body = document.body;
    cityElement.innerText = "Weather in " + name;
    tempElement.innerText = temp + "°C";
    descElement.innerText = description;
    windElement.innerText = "Wind speed: " + speed + "km/h";
    humidityElement.innerText = "Humidity: " + humidity + "%";
    iconElement.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    const cloudState = descElement.textContent.split(" ");
    console.log(cloudState[1]);
    switch (cloudState[1]) {
      case "clouds":
        body.style.backgroundImage = "url('img/cloudy weather.jpg')";
        console.log(body.style);
        break;
      case "sky":
        body.style.backgroundImage = "url('img/sunny weather.jpg')";
        console.log(body.style);
        break;
      case "rain":
        body.style.backgroundImage = "url('img/rainy weather.jpg')";
        console.log(body.style);
        break;
    }
  },
  search: function () {
    this.weatherGeo(document.querySelector(".search__bar").value);
  },
};

document
  .querySelector(".search__button")
  .addEventListener("click", function () {
    weather.search();
  });

document
  .querySelector(".search__bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
