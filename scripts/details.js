let events = data.events;
let fragment = document.createDocumentFragment();

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get('id')

const cardId = events.find(e => e._id == id)

const div = document.querySelector('.container')
div.innerHTML = `<div class="card" style="width: 18rem;">
<img src="${cardId.image}" class="card-img-top" alt="imagen de ${cardId.name}">
<div class="card-body d-flex flex-column align-items-center">
  <h5 class="card-title">${cardId.name}</h5>
  <p class="card-text">${cardId.description}</p>
  <a href="./home.html" class="btn btn-primary">Volver al inicio</a>
</div>
</div>`