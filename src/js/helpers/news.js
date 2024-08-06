import { getNewsApi } from './getApi';

const refs = {
  form: document.querySelector('.news-form'),
  list: document.querySelector('.news-list'),
  submitBtn: document.querySelector('.news-button'),
  loader: document.querySelector('.news-loader'),
};

const getItemTemplate = ({
  source: { name },
  publishedAt,
  title,
  url,
  urlToImage,
}) =>
  `<li class="news-item" data-is='${publishedAt}'>
  <img class='news-icon' src="${urlToImage}" alt="${title}">
  <div class="item-text-box">
       <a href="${url}" target="_blank">${title}</a>
   <p>${name}</p>
        </div>
    </li>`;

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
    .then(({ articles }) => {
      render(articles);
      newsListStyle();
    })
    .finally(() => {
      hideLoader();
      unlockForm();
    });
};

refs.form.addEventListener('submit', onHandleSubmit);
