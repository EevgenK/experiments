import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_UyX6Lvoafpw1TLCC7wZpZ8IP5h7v1HI7WbEG0bh7lTeSZzWmJ5TFmvpTcvvLyKyE';
let AXIOUS_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds(pet) {
  AXIOUS_URL = `https://api.the${pet}api.com/v1`;
  return fetch(`${AXIOUS_URL}/breeds?breed_ids=beng&x-api-key`).then(resp =>
    resp.json()
  );
}

function fetchCatByBreed(breedId) {
  return fetch(
    `${AXIOUS_URL}/images/search?breed_ids=${breedId}&x-api-key`
  ).then(resp => resp.json());
}
function getWeather(days, city) {
  const baseUrl = 'https://api.weatherapi.com/v1';
  const apiKey = 'c9adebbe6f8f4e05956132625240408&q';

  return fetch(
    `${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=${days}&lang=uk`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

// function getNewsApi(value) {
//   const URL = 'https://hn.algolia.com/api/v1/search';
//   return fetch(`${URL}?query=${value}`).then(resp => resp.json());
// }

function getNewsApi(value, pageNumber) {
  const URL = 'https://newsapi.org/v2/everything';
  const KEY = '545b320259f148c98f761a8b0ed17e83';
  const page_size = '&pageSize=12';

  return fetch(`${URL}?q=${value}&apiKey=${KEY}${page_size}&page=${pageNumber}`)
    .then(resp => resp.json())
    .catch(response => console.log(response.message));
}

export { getWeather, getNewsApi, fetchBreeds, fetchCatByBreed };
