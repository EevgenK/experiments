export function getWeather(days, city) {
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
