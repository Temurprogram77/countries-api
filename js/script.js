let countriess = document.querySelector(".countries");
let inp = document.querySelector(".inp input");
let countryList = [];

const getCountries = function (countryName) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  request.addEventListener("load", () => {
    let [data] = JSON.parse(request.responseText);

    let html = `
    <div class="card">
        <div class="image">
            <img src="${data.flags.png}" alt="flag">
        </div>
        <div class="wrt">
            <h3 class="name">${data.name.common}</h3>
            <p class="population">Population: ${(
              data.population / 1_000_000
            ).toFixed(1)} mln</p>
            <p class="capital">Capital: ${
              data.capital ? data.capital[0] : "N/A"
            }</p>
            <p class="currency">Currency: ${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </div>
    `;
    countriess.insertAdjacentHTML("beforeend", html);

    const request2 = new XMLHttpRequest();
    request2.open("GET", "https://restcountries/v3.1/alpha/{us}");
  });
};

let countries = [
  // Africa
  "algeria",
  "angola",
  "benin",
  "botswana",
  "burkina faso",
  "burundi",
  "cape verde",
  "cameroon",
  "central african republic",
  "chad",
  "comoros",
  "democratic republic of the congo",
  "djibouti",
  "egypt",
  "equatorial guinea",
  "eritrea",
  "eswatini",
  "ethiopia",
  "gabon",
  "gambia",
  "ghana",
  "guinea",
  "guinea-bissau",
  "ivory coast",
  "kenya",
  "lesotho",
  "liberia",
  "libya",
  "madagascar",
  "malawi",
  "mali",
  "mauritania",
  "mauritius",
  "morocco",
  "mozambique",
  "namibia",
  "niger",
  "nigeria",
  "republic of the congo",
  "rwanda",
  "são tomé and príncipe",
  "senegal",
  "seychelles",
  "sierra leone",
  "somalia",
  "south africa",
  "south sudan",
  "sudan",
  "tanzania",
  "togo",
  "tunisia",
  "uganda",
  "zambia",
  "zimbabwe",

  // Asia
  "afghanistan",
  "armenia",
  "azerbaijan",
  "bahrain",
  "bangladesh",
  "bhutan",
  "brunei",
  "cambodia",
  "china",
  "cyprus",
  "georgia",
  "india",
  "indonesia",
  "iran",
  "iraq",
  "israel",
  "japan",
  "jordan",
  "kazakhstan",
  "kuwait",
  "kyrgyzstan",
  "laos",
  "lebanon",
  "malaysia",
  "maldives",
  "mongolia",
  "myanmar",
  "nepal",
  "north korea",
  "oman",
  "pakistan",
  "palestine",
  "philippines",
  "qatar",
  "saudi arabia",
  "singapore",
  "south korea",
  "sri lanka",
  "syria",
  "taiwan",
  "tajikistan",
  "thailand",
  "timor-leste",
  "turkey",
  "turkmenistan",
  "united arab emirates",
  "uzbekistan",
  "vietnam",
  "yemen",

  // Europe
  "albania",
  "andorra",
  "austria",
  "belarus",
  "belgium",
  "bosnia and herzegovina",
  "bulgaria",
  "croatia",
  "cyprus",
  "czech republic",
  "denmark",
  "estonia",
  "finland",
  "france",
  "germany",
  "greece",
  "hungary",
  "iceland",
  "ireland",
  "italy",
  "kosovo",
  "latvia",
  "liechtenstein",
  "lithuania",
  "luxembourg",
  "malta",
  "moldova",
  "monaco",
  "montenegro",
  "netherlands",
  "north macedonia",
  "norway",
  "poland",
  "portugal",
  "romania",
  "russia",
  "san marino",
  "serbia",
  "slovakia",
  "slovenia",
  "spain",
  "sweden",
  "switzerland",
  "ukraine",
  "united kingdom",
  "vatican city",

  // North America
  "antigua and barbuda",
  "bahamas",
  "barbados",
  "belize",
  "canada",
  "costa rica",
  "cuba",
  "dominica",
  "dominican republic",
  "el salvador",
  "grenada",
  "guatemala",
  "haiti",
  "honduras",
  "jamaica",
  "mexico",
  "nicaragua",
  "panama",
  "saint kitts and nevis",
  "saint lucia",
  "saint vincent and the grenadines",
  "trinidad and tobago",
  "united states",

  // South America
  "argentina",
  "bolivia",
  "brazil",
  "chile",
  "colombia",
  "ecuador",
  "guyana",
  "paraguay",
  "peru",
  "suriname",
  "uruguay",
  "venezuela",

  // Oceania
  "australia",
  "fiji",
  "kiribati",
  "marshall islands",
  "micronesia",
  "nauru",
  "new zealand",
  "palau",
  "papua new guinea",
  "samoa",
  "solomon islands",
  "tonga",
  "tuvalu",
  "vanuatu",
];

countries.forEach(getCountries);

inp.addEventListener("input", () => {
  const searchTerm = inp.value.toLowerCase();

  countriess.innerHTML = "";

  let filteredCountries = countries.filter((country) => {
    return country.toLowerCase().includes(searchTerm);
  });
  console.log(filteredCountries);

  if (filteredCountries.length > 0) {
    countriess.innerHTML = `<h2>Loading ...</h2>`;
    setTimeout(() => {
      countriess.innerHTML = "";
      filteredCountries.forEach(getCountries);
    }, 500);
  } else {
    countriess.innerHTML = `<h2>Loading ...</h2>`;
    setTimeout(() => {
      countriess.innerHTML = "";
      countriess.innerHTML = "<h2>Hech narsa topilmadi !</h2>";
    }, 500);
  }
});

// https://restcountries.com/v3.1/lang/{language}
