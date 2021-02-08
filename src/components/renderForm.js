import getWeather from "./getWeather";

const renderForm = () => {
  const form = document.createElement("form");
  form.classList.add("searchForm");
  form.innerHTML =
    "<label for='searchForm__input'>Check the current weather (just provide a city name):</label> <input id='searchForm__input' class='searchForm__input' type='text' /><button>Submit</button><div class='report'></div>";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeather(document.querySelector(".searchForm__input").value);
  });
  return form;
};

export default renderForm;
