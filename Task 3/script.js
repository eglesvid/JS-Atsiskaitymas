/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const showButton = document.getElementById("btn");
const outputDiv = document.getElementById("output");

showButton.addEventListener("click", getData);

function getData() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => getOutput(data))
    .catch((error) => console.log(error));
}

function getOutput(data) {
  let output = "";
  data.forEach((user) => {
    output += `<li>${user.login} ${user.avatar_url} </li>`;
  });
  document.querySelector("#output").innerHTML = output;
  outputDiv.classList.add("card");
}
