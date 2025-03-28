
const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";

async function getWeather() {
    const city = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    //URL is taken from openweathermap.org
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);


    if (data.cod == 404) {  //if there is something error in api
        document.querySelector('.error').innerText = 'Invalid City Name';
        document.querySelector('.weather-body').style.display = 'none';
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>o</sup>C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        // console.log(data.weather[0].main);

        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "../image/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherImg.src = "../image/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "../image/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "../image/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "../image/mist.png";
        }

        document.querySelector(".weather-body").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}