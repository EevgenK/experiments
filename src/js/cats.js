import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './helpers/getApi';
import 'slim-select/dist/slimselect.css';
const refs = {
  petSelect: document.querySelector('#pet-select'),
  select: document.querySelector('#breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  info: document.querySelector('.cat-info'),
};
const toHideElement = el => el.classList.add('hidden');
const toShowElement = el => el.classList.remove('hidden');

new SlimSelect({
  select: '#pet-select',
  settings: {
    placeholderText: 'Chose your pet',
  },
});

let colection;
let selectBreed = new SlimSelect({
  select: '#breed-select',
});
const selectMarkup = arr => {
  let markup = arr
    .map(a => `<option class='select_color' value="${a.id}">${a.name}</option>`)
    .join('');
  const placeholder = '<option data-placeholder="true"></option>';
  refs.select.innerHTML = '';
  selectBreed.destroy();
  refs.select.innerHTML = markup;
  refs.select.insertAdjacentHTML('afterbegin', placeholder);
};

const infoMarkup = (imgObj, fullObg) => {
  return (refs.info.innerHTML = `
    <img class='info-img' src='${imgObj.url}' />
  <div class="description">
      <h2>${fullObg.name}</h2>
      <p>${fullObg.description}</p>
      <p><span class='temperamrnt'>Temperament: </span>${fullObg.temperament}</p>
    </div>
    `);
};

const onHandleSelect = e => {
  toHideElement(refs.petSelect);
  toHideElement(refs.select);
  toShowElement(refs.loader);

  const targetID = e.currentTarget.value;

  const card = [];
  colection
    .then(resp => {
      return resp.find(el => el.id === Number(targetID) || el.id === targetID);
    })
    .then(resp => {
      card.push(resp);
    });

  fetchCatByBreed(targetID)
    .then(resp => {
      console.log(resp);
      infoMarkup(...resp, ...card);
      toShowElement(refs.petSelect);
      toShowElement(refs.select);
      toShowElement(refs.info);
    })
    .catch(err =>
      Notify.failure(' Oops! Something went wrong! Try reloading the page!')
    )
    .finally(() => {
      toHideElement(refs.loader);
    });
};
const onPetSelect = e => {
  colection = fetchBreeds(e.currentTarget.value);
  // toHideElement(refs.info);
  colection.then(resp => {
    selectMarkup(resp);
    selectBreed = new SlimSelect({
      select: '#breed-select',
      settings: {
        placeholderText: 'Chose your pet',
      },
    });
    toShowElement(refs.select);
  });
};

toHideElement(refs.select);

refs.petSelect.addEventListener('change', onPetSelect);

refs.select.addEventListener('change', onHandleSelect);
noda;
