console.log('Weather is now active');
const searchBox = document.querySelector('.search-box');
const apiKey = "4aa6099f8a75fedf5c1cd806ee7f3d3c"
const searchBtn = document.getElementById('searchBtn');
let date;
searchBtn.addEventListener('click', searchCity);

function searchCity() {
  let inputText = searchBox.value;
  if (inputText != "") {
    searchBox.value = "";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}&units=metric`;

    fetch(url).then((response) => {
      return response.json();
    }).then(display);
  }
}

function display(weatherData) {
  date = new Date();
  let mainContainer = document.getElementById('main');
  let errorContainer = document.getElementById('error');
  if (weatherData.cod == 404) {
    mainContainer.style.display = "none";
    errorContainer.style.display = "block";
  } else {
    mainContainer.style.display = "block";
    errorContainer.style.display = "none";
  }
  let currentDay = document.querySelector('.date');
  currentDay.innerHTML = date;
  console.log(weatherData);

  let cityName = document.getElementById('cityName');
  let country = document.getElementById('country');

  cityName.innerHTML = weatherData.name;
  country.innerHTML = `,${weatherData.sys.country}`;

  let temperature = document.getElementById('temperature');
  temperature.innerHTML = `${Math.round(weatherData.main.temp)}°c`;

  let weather = document.querySelector('.weather');
  weather.innerHTML = toTitleCase(weatherData.weather[0].description);

  let humidity = document.getElementById('humidity');
  humidity.innerHTML = `Humidity : ${weatherData.main.humidity} %`;

  let pressure = document.getElementById('pressure');
  pressure.innerHTML = `Pressure : ${weatherData.main.pressure} mb`;

  let wind = document.getElementById('wind');
  wind.innerHTML = `wind : ${weatherData.wind.speed} k/h`;

}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}