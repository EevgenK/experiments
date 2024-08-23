const btnBlock = document.querySelector('.pagination-btns');
const paginationBlock = document.querySelector('.pagination');
let items = [];
let pageSize = 5;
export let page = 1;
const paginationMarkup = () => {
  const buttons = Array(pageSize)
    .fill()
    .map(
      (_, idx) =>
        `<button data-btnValue="${idx + 1}" class='pagination-btn'>${
          idx + 1
        }</button>`
    )
    .join('');

  btnBlock.innerHTML = '';
  btnBlock.insertAdjacentHTML('beforeend', buttons);
};

const handlePageClick = e => {
  console.log(e.target);
  if (e.target.classList.value === 'pagination-btn_move-right') {
    page += 1;
    pageSize += 1;
    paginationMarkup();
  } else if (
    e.target.classList.value === 'pagination-btn_move-left' &&
    page !== 1
  ) {
    page -= 1;
  } else {
    page = Number(e.target.dataset.btnvalue);
  }
};

paginationMarkup();
paginationBlock.addEventListener('click', handlePageClick);
