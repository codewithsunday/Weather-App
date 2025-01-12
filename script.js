const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const ApiKey = "3adacf2ee999a29d9635cc63a8d04bef"

var searchBox = document.querySelector(".search input")
var searchBtn = document.querySelector(".search button");


async function getWeather(city){

    // const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${ApiKey}`)
    var data = await response.json();
    console.log(data);

    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + km/h;
}
searchBtn.addEventListener("click", ()=>{
    var city = searchBox.value
    getWeather(city)
})

// getWeather()
// console.log("data");

