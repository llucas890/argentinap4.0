let cards = document.getElementById("cardsList");
let cardsDiv = cards.getElementsByTagName('div');
let fragment = document.createDocumentFragment();
let card = cards.getElementsByClassName('card');
let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';

async function getData() {
  try {
    const response = await fetch(urlApi);
    const dataApi = await response.json();
    arrayData = dataApi.events;
    currentDate = dataApi.currentDate;
    crearCards(arrayData)
    agregarCategorias(arrayData)
    crearCategorias()
  }
  catch(error) {
    console.log(error);
  }
}

getData()



function crearCards(arr) {
  cardsList.innerHTML = ''
  for (element of arr) {
    if (element.date >= currentDate) {
      let content = document.createElement('div')
      content.id = element._id
      content.className = 'card'

      let img = document.createElement('img')
      img.src = element.image
      img.className = 'card-img-top cardimg'
      img.alt = 'cartas elements'
      content.appendChild(img)

      let cardBody = document.createElement('div')
      cardBody.className = 'card-body'
      content.appendChild(cardBody)

      let cardTitle = document.createElement('h5')
      cardTitle.className = 'card-title cardtitle'
      cardTitle.textContent = element.name
      cardBody.appendChild(cardTitle)

      let cardText = document.createElement('p')
      cardText.className = 'card-text cardtext'
      cardText.textContent = element.description
      cardBody.appendChild(cardText)

      let btn = document.createElement('a')
      btn.href = `./details.html?id=${element._id}`
      btn.className = 'btn btn-primary'
      btn.id = 'btncard'
      btn.textContent = 'Ver mas'
      cardBody.appendChild(btn)

      let cardCategory = document.createElement('span')
      cardCategory.textContent = element.category
      cardCategory.className = element.category
      cardCategory.style.display = 'none'
      content.appendChild(cardCategory)

      fragment.appendChild(content)
    }
  }
  cards.appendChild(fragment);
}

cards.appendChild(fragment)

function filterCards() {
  // Obtiene el valor del input de búsqueda
  var searchValue = document.getElementById("searchInput").value.toLowerCase();


  // Recorre todas las cartas y oculta las que no coinciden con la búsqueda
  for (var i = 0; i < cardsDiv.length; i++) {
    var cardText = cardsDiv[i].innerHTML.toLowerCase();
    if (cardText.indexOf(searchValue) > -1) {
      cardsDiv[i].style.display = "";
    } else {
      cardsDiv[i].style.display = "none";
    }
  }
}

var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", filterCards);

const checkboxContainer = document.getElementById("checkboxContainer");
let categorias = []
function agregarCategorias(arr) {
  arr.forEach(e => {
    if (!categorias.includes(e.category)) {
      categorias.push(e.category)
    }
  })
  }
  
  function crearCategorias() {
  categorias.forEach((categoria) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = categoria;
    checkbox.textContent = categoria;
    checkboxContainer.appendChild(checkbox);
  
    let div = document.createElement('div')
    div.textContent = categoria
    checkboxContainer.appendChild(div)
  });
  }


function actualizarCartas() {
  const categoriasSeleccionadas = Array.from(checkboxContainer.querySelectorAll("input:checked")).map((checkbox) => checkbox.value);

  for (let i = 0; i < card.length; i++) {
    if (categoriasSeleccionadas.length == 0) {
      crearCards()
    }
    if (categoriasSeleccionadas.includes(events[i].category)) {
      card[i].style.display = "block";
    } else {
      card[i].style.display = "none";
    }
  }


}


checkboxContainer.querySelectorAll("input").forEach((checkbox) => {
  checkbox.addEventListener("click", actualizarCartas);
});
