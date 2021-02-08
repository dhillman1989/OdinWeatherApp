const printWeatherData = (weatherData) => {
  //remove existing report
  let report = document.querySelector(".report");
  report.innerHTML = "";

  //create heading
  let h3 = document.createElement("h1");
  h3.classList.add("report__location");
  h3.innerText = weatherData.name;
  //create data
  let ul = document.createElement("ul");
  ul.classList.add("report__details");
  ul.innerHTML = `<li>Weather: ${weatherData.weather[0].main}</li>`;

  report.appendChild(h3);
  report.appendChild(ul);
};

export default printWeatherData;
