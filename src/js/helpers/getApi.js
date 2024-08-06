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

function getNewsApi(value) {
  const URL = 'https://newsapi.org/v2/everything';
  const KEY = '545b320259f148c98f761a8b0ed17e83';
  return fetch(`${URL}?q=${value}&apiKey=${KEY}`)
    .then(resp => resp.json())
    .catch(message => console.log(message));
}

export { getWeather, getNewsApi };
