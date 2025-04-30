console.log("XXX");

let cardSnippet = `<div class="card mx-2" style="min-width: 200px; max-heigh:200px">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">Maps</a>
                </div>
            </div>`;

const url = "https://apiscm.comunidad.madrid/t/ciudadanos.comunidad.madrid/sector-publico/catalogo-unificado/v1/recursos/94756e35-3059-451d-81a6-3427d2551de4/datos?distintos=true&formato=objects&$init=0&$limit=100";
const finder = () => {
window.navigator.geolocation.getCurrentPosition(async(gp) => {
let lat = gp.coords.latitude;
let lon = gp.coords.longitude;
const res = await fetch(`https://cors-anywhere.herokuapp.com/https://deamadrid.com/api/finder?lat=${lat}&lon=${lon}`, {
    method:"GET"
});
const data = await res.json();
console.log(data);
cardsContainer = document.querySelector("#cards-container");

let toAdd;

data.data.forEach((dea) => {
    toAdd = toAdd + `<div class="card mx-2" style="min-width: 200px; max-height:200px">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${dea.direccion_ubicacion}</h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">Maps</a>
                </div>
    </div>`;
    cardsContainer.innerHTML = toAdd;
});

});
}