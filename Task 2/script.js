/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let btnElement = document.getElementById("btn__element");
let btnState = document.getElementById("btn__state");
let count = 0;

btnElement.onclick = function () {
  count++;
  btnState.innerText = count;
};
