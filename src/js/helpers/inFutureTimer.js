import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import { convertMs } from '../helpers/convertMs';
// import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const refs = {
  button: document.querySelector('[data-start]'),
  selector: document.querySelector('#datetime-picker'),
  timerValues: document.querySelectorAll('.value'),
};

refs.button.disabled = true;
let intervalId = null;
export let inputDate = 0;

Notiflix.Notify.init({
  width: '500px',
  fontSize: '22px',
  failure: {
    textColor: 'rgba(242, 10, 33, 1)',
    background: '#80cbc4',
    notiflixIconColor: 'rgba(242, 10, 33, 1)',
  },
});
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    inputDate = selectedDates.getTime();
    if (inputDate <= Date.now()) {
      Notiflix.Notify.failure('Будьласка оберіть дату в майбутньому');
      clearValues();
    } else {
      refs.button.disabled = false;
    }
  },
};
flatpickr(refs.selector, options);
refs.button.addEventListener('click', onBtnClick);

function onBtnClick() {
  intervalId = setInterval(() => {
    let dateDiference = inputDate - Date.now();
    let dates = convertMs(dateDiference);
    [...refs.timerValues].map(
      (el, idx) => (el.textContent = Object.entries(dates)[idx][1])
    );

    if (dateDiference < 1000) {
      clearValues();
    }
  }, 1000);
  refs.button.disabled = true;
}
function clearValues() {
  clearInterval(intervalId);
  [...refs.timerValues].map(el => (el.textContent = '00'));
}
