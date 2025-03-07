let countriess = document.querySelector(".countries");
let inp = document.querySelector(".inp input")

const getCountries = function (countries) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countries}`);
  request.send();
  request.addEventListener("load", () => {
    let [data] = JSON.parse(request.responseText);
    console.log(data);
    console.log(data.flags.png);
    
    let html = `
    <div class="card">
        <div class="image">
            <img src="${data.flags.png}" alt="name">
        </div>
        <div class="wrt">
            <h2 class="name">${data.name.common}</h2>
            <p class="population">Population: ${(data.population/1_000_000).toFixed(1)} mln</p>
            <p class="capital">Capital: ${data.capital[0]}</p>
            <p class="currency">Currency: ${data.currencies}</p>
        </div>
    </div>
    `;
    countriess.insertAdjacentHTML('beforeend', html)
  });
};
// Africa  
getCountries("algeria");  
getCountries("angola");  
getCountries("benin");  
getCountries("botswana");  
getCountries("burkina faso");  
getCountries("burundi");  
getCountries("cape verde");  
getCountries("cameroon");  
getCountries("central african republic");  
getCountries("chad");  
getCountries("comoros");  
getCountries("democratic republic of the congo");  
getCountries("djibouti");  
getCountries("egypt");  
getCountries("equatorial guinea");  
getCountries("eritrea");  
getCountries("eswatini");  
getCountries("ethiopia");  
getCountries("gabon");  
getCountries("gambia");  
getCountries("ghana");  
getCountries("guinea");  
getCountries("guinea-bissau");  
getCountries("ivory coast");  
getCountries("kenya");  
getCountries("lesotho");  
getCountries("liberia");  
getCountries("libya");  
getCountries("madagascar");  
getCountries("malawi");  
getCountries("mali");  
getCountries("mauritania");  
getCountries("mauritius");  
getCountries("morocco");  
getCountries("mozambique");  
getCountries("namibia");  
getCountries("niger");  
getCountries("nigeria");  
getCountries("republic of the congo");  
getCountries("rwanda");  
getCountries("são tomé and príncipe");  
getCountries("senegal");  
getCountries("seychelles");  
getCountries("sierra leone");  
getCountries("somalia");  
getCountries("south africa");  
getCountries("south sudan");  
getCountries("sudan");  
getCountries("tanzania");  
getCountries("togo");  
getCountries("tunisia");  
getCountries("uganda");  
getCountries("zambia");  
getCountries("zimbabwe");  

// Asia  
getCountries("afghanistan");  
getCountries("armenia");  
getCountries("azerbaijan");  
getCountries("bahrain");  
getCountries("bangladesh");  
getCountries("bhutan");  
getCountries("brunei");  
getCountries("cambodia");  
getCountries("china");  
getCountries("cyprus");  
getCountries("georgia");  
getCountries("india");  
getCountries("indonesia");  
getCountries("iran");  
getCountries("iraq");  
getCountries("israel");  
getCountries("japan");  
getCountries("jordan");  
getCountries("kazakhstan");  
getCountries("kuwait");  
getCountries("kyrgyzstan");  
getCountries("laos");  
getCountries("lebanon");  
getCountries("malaysia");  
getCountries("maldives");  
getCountries("mongolia");  
getCountries("myanmar");  
getCountries("nepal");  
getCountries("north korea");  
getCountries("oman");  
getCountries("pakistan");  
getCountries("palestine");  
getCountries("philippines");  
getCountries("qatar");  
getCountries("saudi arabia");  
getCountries("singapore");  
getCountries("south korea");  
getCountries("sri lanka");  
getCountries("syria");  
getCountries("taiwan");  
getCountries("tajikistan");  
getCountries("thailand");  
getCountries("timor-leste");  
getCountries("turkey");  
getCountries("turkmenistan");  
getCountries("united arab emirates");  
getCountries("uzbekistan");  
getCountries("vietnam");  
getCountries("yemen");  

// Europe  
getCountries("albania");  
getCountries("andorra");  
getCountries("austria");  
getCountries("belarus");  
getCountries("belgium");  
getCountries("bosnia and herzegovina");  
getCountries("bulgaria");  
getCountries("croatia");  
getCountries("cyprus");  
getCountries("czech republic");  
getCountries("denmark");  
getCountries("estonia");  
getCountries("finland");  
getCountries("france");  
getCountries("germany");  
getCountries("greece");  
getCountries("hungary");  
getCountries("iceland");  
getCountries("ireland");  
getCountries("italy");  
getCountries("kosovo");  
getCountries("latvia");  
getCountries("liechtenstein");  
getCountries("lithuania");  
getCountries("luxembourg");  
getCountries("malta");  
getCountries("moldova");  
getCountries("monaco");  
getCountries("montenegro");  
getCountries("netherlands");  
getCountries("north macedonia");  
getCountries("norway");  
getCountries("poland");  
getCountries("portugal");  
getCountries("romania");  
getCountries("russia");  
getCountries("san marino");  
getCountries("serbia");  
getCountries("slovakia");  
getCountries("slovenia");  
getCountries("spain");  
getCountries("sweden");  
getCountries("switzerland");  
getCountries("ukraine");  
getCountries("united kingdom");  
getCountries("vatican city");  

// North America  
getCountries("antigua and barbuda");  
getCountries("bahamas");  
getCountries("barbados");  
getCountries("belize");  
getCountries("canada");  
getCountries("costa rica");  
getCountries("cuba");  
getCountries("dominica");  
getCountries("dominican republic");  
getCountries("el salvador");  
getCountries("grenada");  
getCountries("guatemala");  
getCountries("haiti");  
getCountries("honduras");  
getCountries("jamaica");  
getCountries("mexico");  
getCountries("nicaragua");  
getCountries("panama");  
getCountries("saint kitts and nevis");  
getCountries("saint lucia");  
getCountries("saint vincent and the grenadines");  
getCountries("trinidad and tobago");  
getCountries("united states");  

// South America  
getCountries("argentina");  
getCountries("bolivia");  
getCountries("brazil");  
getCountries("chile");  
getCountries("colombia");  
getCountries("ecuador");  
getCountries("guyana");  
getCountries("paraguay");  
getCountries("peru");  
getCountries("suriname");  
getCountries("uruguay");  
getCountries("venezuela");  

// Oceania  
getCountries("australia");  
getCountries("fiji");  
getCountries("kiribati");  
getCountries("marshall islands");  
getCountries("micronesia");  
getCountries("nauru");  
getCountries("new zealand");  
getCountries("palau");  
getCountries("papua new guinea");  
getCountries("samoa");  
getCountries("solomon islands");  
getCountries("tonga");  
getCountries("tuvalu");  
getCountries("vanuatu");  

// search

inp.addEventListener('input', () => {
    const searchTerm = inp.value.toLowerCase();
    const filteredCountries = countryList.filter(country => country.toLowerCase().includes(searchTerm));
    displayCountries(filteredCountries);
});
