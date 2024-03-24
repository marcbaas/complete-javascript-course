// JavaScript Fundamentals — Part 1

/* const country = "Italy";
const continent = "Europe";
let population = 59;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language = "Italian";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let halfPopulation = population / 2;
console.log(
  "Half of the population of " +
    country +
    " is " +
    halfPopulation +
    " million people."
);

population = population + 1;
console.log("The new population is " + population + " million people.");

let populationFinland = 6;
if (populationFinland < population) {
  console.log(country + " has a larger population than Finland.");
} else {
  console.log(country + " has a smaller population than Finland.");
}

let averagePopulation = 33;
if (averagePopulation > population) {
  console.log(country + " has less population than average.");
} else {
  console.log(country + " has more population than average.");
}

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language +
  ".";
console.log(description);

let descriptionLitaralSyntax = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(descriptionLitaralSyntax);

console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 23
console.log("19" - "13" + 17); // -> ?
console.log("123" < 57); // -> ?
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ? */

/* var numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders.");
} */

/* if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :'(`);
} */

/* var spokenLanguage = prompt("What language do you speak?");
switch (spokenLanguage) {
  case "Mandarin" || "Chinese":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
  default:
    console.log("Great language too :D");
    break;
}

population > 33
  ? console.log("Wow, that is a lot!")
  : console.log("I have seen more!");

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average.`
); */

// JavaScript Fundamentals — Part 2

/* var country = prompt("What country do you live in?");
var population = prompt("How many people live in your country (in millions)?");
var capitalCity = prompt("What is the name of your capital city?");

function describeCountry(country, population, capitalCity) {
  var textLine = `${country} has ${population} people and its capital city is ${capitalCity}.`;
  console.log(textLine);
} */
