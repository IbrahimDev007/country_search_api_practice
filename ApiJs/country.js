// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/capital/{capital}
// https://restcountries.com/v3.1/region/{region}
// https://restcountries.com/v3.1/lang/{lang}

function showAll() {

    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => show(data))

}
showAll()
const show = (data) => {
    document.getElementById('map').innerHTML = ``
    let maps = document.getElementById('map');
    data.forEach(element => {
        const { languages, flags, name
        } = element;
        // console.log(Object.keys(languages));
        const keys = Object.keys(languages);

        maps.innerHTML += ` <div class="border-cyan-800 hover:bg-red-400">
        <img src="${flags
                .png}
        " alt="" class="w-full h-40">
        <h3 class="text-3xl">${name.common}</h3>
        <h3 class="text-3xl">${languages[keys[0]]}</h3>
    </div>`
        // console.log(element);
    });
}
// capital search 
function capitalSearch() {

    const capital = document.getElementById('capital').value;
    fetch(`https://restcountries.com/v3.1/capital/${capital}`)
        .then(res => res.json())
        .then(data => show(data))
}
function languageInput() {
    const lang = document.getElementById('language').value;
    fetch(`https://restcountries.com/v3.1/lang/${lang}`)
        .then(res => res.json())
        .then(data =>show(data))

}
// Africa, Americas, Asia, Europe, Oceania.

 document.querySelector('#region-select').addEventListener('change',function (e) {
    const region=e.target.value
       fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then(res => res.json())
        .then(data => show(data))
        .catch(err => console.log(err));
 });

