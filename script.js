const btn = document.querySelector("button");
const input = document.querySelector("input");
const weatherIcon = document.querySelector(".weather-icon");




// const city = document.querySelector(".city").value;

const apiKey = "0f135dc75405fdff398528b5433f61db";
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?unit=matric&q=Lucknow`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkData(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/p";
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }



    console.log(data);
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");

    console.log(input.value);

    checkData(input.value);
});

