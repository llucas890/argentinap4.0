let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';
let fragment = document.createDocumentFragment();

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get('id')

async function getData() {
  try {
    const response = await fetch(urlApi);
    const dataApi = await response.json();
    arrayData = dataApi.events;
    const cardId = arrayData.find(e => e._id == id) 
    crearCard(cardId)
  }
  catch (error) {
    console.log(error);
  }

}
getData()
function crearCard(arr) {
  const div = document.querySelector('.container')
  div.innerHTML = `<div class="card" style="width: 18rem;">
<img src="${arr.image}" class="card-img-top" alt="imagen de ${arr.name}">
<div class="card-body d-flex flex-column align-items-center">
  <h5 class="card-title">${arr.name}</h5>
  <p class="card-text">${arr.description}</p>
  <a href="./home.html" class="btn btn-primary">Volver al inicio</a>
</div>
</div>`
}