let countriess = document.querySelector(".countries");
let inp = document.querySelector(".inp input");
let countryList = [];

const getCountries = function (countryName) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  request.addEventListener("load", () => {
    let [data] = JSON.parse(request.responseText);
    
    countryList.push(data.name.common.toLowerCase());

    let html = `
    <div class="card">
        <div class="image">
            <img src="${data.flags.png}" alt="flag">
        </div>
        <div class="wrt">
            <h2 class="name">${data.name.common}</h2>
            <p class="population">Population: ${(data.population / 1_000_000).toFixed(1)} mln</p>
            <p class="capital">Capital: ${data.capital ? data.capital[0] : "N/A"}</p>
            <p class="currency">Currency: ${Object.values(data.currencies)[0].name}</p>
        </div>
    </div>
    `;
    countriess.insertAdjacentHTML('beforeend', html);
  });
};

// let countries = ["algeria", "angola", "benin", "botswana", "burkina faso", "burundi",
//   "cape verde", "cameroon", "central african republic", "chad", "comoros", "congo",
//   "djibouti", "egypt", "eritrea", "eswatini", "ethiopia", "gabon", "gambia",
//   "ghana", "guinea", "ivory coast", "kenya", "lesotho", "liberia", "libya",
//   "madagascar", "malawi", "mali", "mauritania", "morocco", "mozambique",
//   "namibia", "niger", "nigeria", "rwanda", "senegal", "seychelles", "sierra leone",
//   "somalia", "south africa", "south sudan", "sudan", "tanzania", "togo", "tunisia",
//   "uganda", "zambia", "zimbabwe"];

countries.forEach(getCountries);

let body = document.querySelector('body');

inp.addEventListener('input', () => {
  const searchTerm = inp.value.toLowerCase();
  
  countriess.innerHTML = "";

  let filteredCountries = countries.filter(country => {
    return country.toLowerCase().includes(searchTerm)
  });
  console.log(filteredCountries);
  
  if (filteredCountries.length > 0) {
    filteredCountries.forEach(getCountries);
    console.log(countries.length);
    
  } else {
    countriess.textContent = "Hech narsa topilmadi"
  }
});