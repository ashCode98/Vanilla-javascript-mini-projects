const btn = document.querySelector('button')
const box = document.querySelector('.box')
const details = document.querySelector('.details')
const sameLocation = document.querySelector('.location-name')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const w_s = document.querySelector('.wind-speed-no')
const weather_image = document.querySelector('.weather-image')

btn.addEventListener('click', () => {
    getResponse();
})

async function getResponse() {

    box.style.height = "300px";

    const usr_input = document.querySelector('.user_input')
    const location = usr_input.value

    const mainResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c0ec28dfcd7676ef723f882bb0df8f82`)
    var mainData = await mainResponse.json();
    console.log(mainData)
    // let weather_forecast = mainData.weather[0].main

    // if (weather_forecast == "Clouds") {
    //     weather_image.src = "images/clouds.png"
    // }
    // else if (weather_forecast == "Clear") {
    //     weather_image.src = "images/clear.png"
    // }
    // else if (weather_forecast == "Mist") {
    //     weather_image.src = "images/mist.png"
    // }
    // else if (weather_forecast == "Drizzle") {
    //     weather_image.src = "images/drizzle.png"
    // }
    // else if (weather_forecast == "Humidity") {
    //     weather_image.src = "images/humidity.png"
    // }
    // else if (weather_forecast == "Rain") {
    //     weather_image.src = "images/rain.png"
    // }
    // else if (weather_forecast == "Snow") {
    //     weather_image.src = "images/snow.png"
    // }

    temperature.innerHTML = (`${parseInt(mainData.main.temp - 273.15)}°C`)
    sameLocation.innerHTML = `${location}`

    humidity.innerHTML = `${mainData.main.humidity}%<br>Humidity`;
    humidity.style = "font-size: 13px; margin: 0px 3px"
    w_s.innerHTML = `${(mainData.wind.speed * 3).toFixed(2)} Km/h<br>Wind speed`
    w_s.style = "font-size: 13px"
}