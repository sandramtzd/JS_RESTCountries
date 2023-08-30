const submitButton = document.querySelector('#submit-button');
const countryForm = document.querySelector('#country-form');
const countriesList = document.querySelector("#countriesList");
let allCountries;


const fetchCountries = async () =>{
    const response = await fetch ("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
    

}

const populateList =() => {
    allCountries.forEach((country) => {
    const countryLi = document.createElement("li");
    const countryParagraph =document.createElement("p");

    countryParagraph.textContent = country.population;
    countryLi.textContent = country.name.common;

    countryLi.appendChild(countryParagraph);
    countriesList.appendChild(countryLi);
})}




const handleSubmit = (event) => {
    event.preventDefault();
    const searchedCountry = event.target["input-box"].value
    console.log(searchedCountry);
    countriesFiltered = allCountries.filter(country => 
        (country.name.common).toLowerCase().includes(searchedCountry.toLowerCase()));
    console.log(countriesFiltered);
    countriesList.innerHTML = "";

    countriesFiltered.forEach((country) => {
        const countryLi = document.createElement("li");
        const countryParagraph =document.createElement("p");

        countryParagraph.textContent = country.population;
        countryLi.textContent = country.name.common;

        countryLi.appendChild(countryParagraph);
        countriesList.appendChild(countryLi);


    })

}



countryForm.addEventListener('submit', handleSubmit);

const setup = async () => {
    allCountries = await fetchCountries();
    populateList();
}

setup();






