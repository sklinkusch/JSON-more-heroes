// Defining container
container = document.querySelector("main");
let requestUrl =
  "https://gist.githubusercontent.com/LeandroDCI/697427913933937f714dc9c4e728d1c7/raw/ce065f1a72d937eade74e5523d68d834ec2b5304/Heroes.json";
let request = new XMLHttpRequest();
request.open("GET", requestUrl);
request.responseType = "text";
request.send();
request.onload = function() {
  let HeroesText = request.response;
  let superHeroes = JSON.parse(HeroesText);
  console.log(superHeroes);
};
