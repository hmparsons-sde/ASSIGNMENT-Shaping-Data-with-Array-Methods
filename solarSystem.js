const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const outEl = document.querySelector("#planets")
outEl.innerHTML = "<h1>Planets in Our Solar System</h1>"

planets.forEach(planet => {
  outEl.innerHTML += `
    <h2>${planet.elemnt}</h2>
  `
  outEl.innerHTML += "<hr/>"
});
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
function capitalizeFirstLetter(planets) {
  return planets[0].toUpperCase() + planets.slice(1);
}
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const findPlanet = planets.find(planet => planet.includes('e'));

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
