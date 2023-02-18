const API_URL = '';
// const data = JSON.parse(this.response);
const data = fetch(API_URL)
console.log(data)

let cardTitle = document.getElementsByClassName(card-title)
cardTitle.innerHTML = `${events.name}`