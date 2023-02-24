var cards = document.getElementById("cards");
let events = data.events

let fragment = document.createDocumentFragment()

for (evento of events) {
  let content = document.createElement('div')
  content.className = 'card'

  let img = document.createElement('img')
  img.src = evento.image
  img.className = 'card-img-top cardimg'
  img.alt = 'cartas eventos'
  content.appendChild(img)

  let cardBody = document.createElement('div')
  cardBody.className = 'card-body'
  content.appendChild(cardBody)

  let cardTitle = document.createElement('h5')
  cardTitle.className = 'card-title cardtitle'
  cardTitle.textContent = evento.name
  cardBody.appendChild(cardTitle)

  let cardText = document.createElement('p')
  cardText.className = 'card-text cardtext'
  cardText.textContent = evento.description
  cardBody.appendChild(cardText)

  let btn = document.createElement('a')
  btn.href = '#'
  btn.className = 'btn btn-primary'
  btn.id = 'btncard'
  btn.textContent = 'Ver mas'
  cardBody.appendChild(btn)

  fragment.appendChild(content)
}

cards.appendChild(fragment)

