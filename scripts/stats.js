let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';

async function getData() {
  try {
    const response = await fetch(urlApi);
    const dataApi = await response.json();
    arrayData = dataApi.events;
  }
  catch(error) {
    console.log(error);
  }
}

getData()