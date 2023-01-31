/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const output = document.getElementById("output");

const getCars = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const cars = await response.json();
    console.log(cars);

    cars.forEach((car) => {
      const containerDiv = document.createElement("div");
      const brand = document.createElement("h2");
      const model = document.createElement("ul");
      brand.textContent = car.brand;
      model.textContent = car.models;
      containerDiv.append(brand, model);
      output.append(containerDiv);
      containerDiv.classList.add("card");
    });
  } catch (err) {
    console.error(err);
  }
};

getCars();
