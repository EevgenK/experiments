import { getNewsApi } from './getApi';

const refs = {
  form: document.querySelector('.news-form'),
  list: document.querySelector('.news-list'),
  submitBtn: document.querySelector('.news-button'),
  loader: document.querySelector('.news-loader'),
};

const getItemTemplate = ({ objectID, title, url }) =>
  `<li class="news-item" data-is='${objectID}><a href="${url}" target="_blank">${title}</a></li>`;

const render = arr => {
  const list = arr.map(getItemTemplate);
  refs.list.innerHTML = list.join('');
};

const showLoader = () => refs.loader.classList.add('show');
const hideLoader = () => refs.loader.classList.remove('show');
const newsListStyle = () => refs.list.classList.add('news-show');
const lockForm = () => refs.submitBtn.setAttribute('disabled', true);
const unlockForm = () => refs.submitBtn.removeAttribute('disabled');
const onHandleSubmit = e => {
  e.preventDefault();
  showLoader();
  lockForm();
  const { value } = e.target.elements.query;
  getNewsApi(value)
    .then(({ hits }) => {
      render(hits);
      newsListStyle();
    })
    .finally(() => {
      hideLoader();
      unlockForm();
    });
};

refs.form.addEventListener('submit', onHandleSubmit);
