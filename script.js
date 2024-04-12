let results = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//function to fetch weather details from api and display them

let getWeather =() => {
  let cityValue = cityRef.value;

  //If input field is empty
  if(cityValue.length == 0){
    results.innerHTML=`<h3>Please enter a city name</h3>`
  }
  //If input field is NOT empty
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    fetch(url)
    .then((resp) => resp.json())
    //If city name is valid
    .then((data) => {
      console.log(data);
      console.log(data.weather[0].icon);
      console.log(data.weather[0].main);
      console.log(data.weather[0].description);
      console.log(data.name);
      console.log(data.main.temp_min);
      console.log(data.main.temp_max);
      results.innerHTML =`
      <h2>${data.name}</h2>
      <h4 class="weather">${data.weather[0].description}</h4>
      <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
      <h1>${data.weather}</h1>
      `;
      })    
      .catch(() => {
      results.innerHTML =`<h3>City not found</h3>`
      })
};
window.addEventListener("load", getWeather);