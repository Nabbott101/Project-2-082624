
var refresh = document.querySelector("button");
document.querySelector("button").addEventListener("keyup", (e) => {
  if (e.which === 13) {
    getData();
  }
});
document.querySelector("button").addEventListener("click", (e) => {
  getData();
});
/*Get data from the API*/
function getData(input) {
  var API_KEY = "wxQe6Cr1mUU2vCv3BZ7sRmUUc5Phzg5u";
  var url ="https://api.giphy.com/v1/gifs/trending?api_key=" +
    API_KEY +
    "&q=" +
    input +
    "&limit=25&offset=0&rating=g&lang=en"; /*this will only return maximum  25 gifs at a time*/
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data.data))
    .catch((e) => {
      console.log(e);
    });
}
/*Display the output*/
function showData(data) {
  data.forEach((element) => {
    var src = element.images.fixed_height.url;
    var output = document.querySelector(".output");
    output.innerHTML += "<img src=" + src + " >";
  });
}

