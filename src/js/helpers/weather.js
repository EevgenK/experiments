import { inputDate } from './inFutureTimer';
import { convertMs } from './convertMs';
import Notiflix from 'notiflix';
import { getWeather } from '../getApi';

const refs = {
  weatherBtn: document.querySelector('[data-start]'),
  daysValue: document.querySelector('[data-days]'),
  city: document.querySelector('#city-picker'),
  date: document.querySelector('#datetime-picker'),
  list: document.querySelector('.js-list'),
};

refs.weatherBtn.addEventListener('click', onWeatherBtn);
function onWeatherBtn(e) {
  let city = refs.city.value;
  let dateDiference = inputDate - Date.now();
  let date = Number(convertMs(dateDiference).days) + 2;
  if (date > 0) {
    getWeather(date, city)
      .then(
        data => (refs.list.innerHTML = createMarkup(data.forecast.forecastday))
      )
      .catch(err => console.log(err));
  } else {
    Notiflix.Notify.failure('Будьласка оберіть дату в майбутньому');
  }
}

// refs.city.addEventListener('input', () => {
//   if (refs.city.value !== '') {
//     refs.weatherBtn.disabled = false;
//   }
// });

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) =>
        ` <li class='weather-item'>
        <p>${date}</p>
        <img class='weather-icon' src="${icon}" alt="${text}">
                </img>
          <p class='weather-text'>${text}</p>
            <h4 class='temperature'>Середня температура: ${avgtemp_c}°C</h4>
      </li>
    `
    )
    .join(' ');
}
