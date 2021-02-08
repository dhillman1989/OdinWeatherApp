import getWeather from "./getWeather";

const renderForm = () => {
  const form = document.createElement("form");
  form.classList.add("searchForm");
  form.innerHTML =
    "<input class='searchForm__input' type='text' /><button>Submit</button><div class='report'></div>";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeather(document.querySelector(".searchForm__input").value);
  });
  return form;
};

export default renderForm;
