/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector("form");
const userInput = document.getElementById("search");
const output = document.getElementById("output");

form.addEventListener("submit", getResult);

function getResult(e) {
  e.preventDefault(e);

  const kgInput = +userInput.value;

  const poundResult = kgInput * 2.2046;
  const gramResult = kgInput / 0.001;
  const ounceResult = kgInput * 35.274;

  output.innerText = `Your weight in pounds: ${poundResult}\n Your weight in grams: ${gramResult}\n Your weight in ounces: ${ounceResult}`;
}
