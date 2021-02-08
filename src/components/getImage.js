const API_KEY = "R9qWf9OebFgqBl4NQi7w8SfWghlHADHH";

const getImage = (weather) => {
  const report = document.querySelector(".report");
  const image = document.createElement("img");
  fetch(
    `https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${weather}`,
    {
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      image.src = res.data.images.original.url;
      report.appendChild(image);
    })
    .catch(() => {
      giphyImage.src = "./clipart2883707.png";
    });
};

export default getImage;
