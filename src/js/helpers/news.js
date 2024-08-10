import { getNewsApi } from './getApi';

import './news/paginationMarkup';
import { page } from './news/paginationMarkup';
const refs = {
  form: document.querySelector('.news-form'),
  list: document.querySelector('.news-list'),
  submitBtn: document.querySelector('.news-button'),
  loader: document.querySelector('.news-loader'),
  searchBlock: document.querySelector('.search-result'),
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

const showLoader = el => el.classList.add('show');
const hideLoader = el => el.classList.remove('show');
const newsListStyle = () => refs.searchBlock.classList.add('news-show');
const lockForm = () => refs.submitBtn.setAttribute('disabled', true);
const unlockForm = () => refs.submitBtn.removeAttribute('disabled');

const onHandleSubmit = e => {
  e.preventDefault();
  hideLoader(refs.searchBlock);
  showLoader(refs.loader);

  lockForm();
  const { value } = e.target.elements.query;
  getNewsApi(value, page)
    .then(({ articles }) => {
      render(articles);
      newsListStyle();
      showLoader(refs.searchBlock);
    })
    .catch(err => {
      console.log(err.message);
    })
    .finally(() => {
      hideLoader(refs.loader);
      unlockForm();
    });
};

refs.form.addEventListener('submit', onHandleSubmit);
