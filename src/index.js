///IMPORT STYLES
import "./styles/main.scss";
import renderForm from "./components/renderForm";

const container = document.querySelector(".container");

container.appendChild(renderForm());
