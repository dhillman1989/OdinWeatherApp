const displayError = (msg) =>
  (document.querySelector(
    ".report"
  ).innerHTML = `<h3 class='text--danger'>${msg}</h3>`);

export default displayError;
