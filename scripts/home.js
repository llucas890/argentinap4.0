let cards = document.getElementById("cardsList");
let events = data.events;



let fragment = document.createDocumentFragment();

function crearCards(arr) {
  cardsList.innerHTML = ''
  arr.forEach(element => {

    let content = document.createElement('div')
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

    fragment.appendChild(content)

  });
  cardsList.appendChild(fragment);
}


// filtrar cartas por searchinput

// Obtiene la lista de cartas
var cardList = document.getElementById("cardsList");

// Obtiene todos los elementos de la lista de cartas
var cardsDiv = cardList.getElementsByTagName('div')

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


// filtrar cartas por checkbox 

// Obtiene la lista de checkbox
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

let checkboxesSeleccionados = [];

checkboxes.forEach(item => item.addEventListener('change', inputSelected));

function inputSelected(e) {
  if (e.target.checked) {
    checkboxesSeleccionados.push(e.target.value)
    filterCardsCheckbox(events, checkboxesSeleccionados)
  }
  else {
    let borrarElementos = checkboxesSeleccionados.filter(item => item !== e.target.value)
    checkboxesSeleccionados = borrarElementos
    filterCardsCheckbox(events, checkboxesSeleccionados)
  }
}

crearCards(events)


function filterCardsCheckbox(arr, arrInputs) {
  if (arrInputs.length === 0) {
    crearCards(events)
  }
  else {
    arr.forEach(element => {
      for (let input of arrInputs) {
        if (input == element.category) {
          if (coincidenciasArray) {
            coincidenciasArray.push(element)
          }
        }
        else {
          // let borrarElementos = coincidenciasArray.filter(item => item !== element)
          // coincidenciasArray = borrarElementos
        }
      }
    });
    // crearCards(coincidenciasArray)
    console.log(coincidenciasArray);
  }
  
}

let coincidenciasArray = []