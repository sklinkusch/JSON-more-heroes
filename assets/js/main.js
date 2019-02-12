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
  showHeroes(superHeroes);
};
const showHeroes = heroes => {
  tableHead =
    "<table><thead><tr><th>Hero</th><th>Creator</th><th>Alter Ego</th><th>First Appearance</th><th>Characters</th></tr></thead><tbody>";
  tableContent = heroes
    .map(hero => {
      const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
      } = hero;
      const characterArray = characters.split(",");
      const characterString = characterArray.join("<br>");
      return `<tr><td>${superhero}</td><td>${publisher}</td><td>${alter_ego}</td><td>${first_appearance}</td><td>${characterString}</td></tr>`;
    })
    .join("");
  tableFoot = "</tbody></table>";
  container.innerHTML = tableHead + tableContent + tableFoot;
};
