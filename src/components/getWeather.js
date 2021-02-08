const API_KEY = "1061eaf1112b674f9af09edc918cc3aa";

import printWeatherData from "./printWeatherData";
import displayError from "./displayError";

const getWeather = (query) => {
  const report = document.querySelector(".report");
  report.innerText = "Loading...";
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`,
    {
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((res) => printWeatherData(res))
    .catch(() => displayError("Something went wrong"));
};

export default getWeather;
