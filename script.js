const city = "London"

let weather = {
    "apiKey": "dba7d7b658e0ea9699b67a8ae8aabb6a",
    weatherFetch: function (city) {
        fetch(
            // "http://api.openweathermap.org/geo/1.0/direct?q="
            // + city + "&limit=5&appid="
            // + this.apiKey
            "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=dba7d7b658e0ea9699b67a8ae8aabb6a"
        )
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log('data', data[0].lat)
            })
            .catch(function (error) {
                console.log('error', error)
            })
        const { lat  = data
        const { lon } = data.lon
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon" + lon + "&appid=" + this.apiKey
        )
            .then((Response) => Response.json())
    },

    displayWeather: function (data) {

    }
}