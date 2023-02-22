const currentDate = data.currentDate
let events = data.events
var cards = document.getElementById("cards");

for (let index = 0; index < events.length; index++) {

  if (events[index].date <= currentDate) {
    cards.innerHTML += `<div class="card" style="width: 18rem;"><img src=${events[index].image} class="card-img-top cardimg" alt="..."><div class="card-body"><h5 class="card-title cardtitle">${events[index].name}</h5><p class="card-text cardtext">${events[index].description}</p><a href="#" class="btn btn-primary" id="btncard">Ver mas</a></div></div>`
  }

}