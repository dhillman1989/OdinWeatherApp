const API_KEY = "1061eaf1112b674f9af09edc918cc3aa";

import printWeatherData from "./printWeatherData";
import displayError from "./displayError";
import getImage from "./getImage";

const getWeather = (query) => {
  const report = document.querySelector(".report");
  report.innerText = "Loading...";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`,
    {
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      printWeatherData(res);
      getImage(res.weather[0].main);
    })
    .catch(() => displayError("Something went wrong"));
};

export default getWeather;
