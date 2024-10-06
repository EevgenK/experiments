import * as basicLightbox from 'basiclightbox';
import toastr from 'toastr';
import { v4 } from 'uuid';
import moment from 'moment';
import {
  getItemTemplate,
  createTodo,
  reedTodos,
  updateTodo,
  deleteTodo,
} from './todo/getItems';
import './todo/configToastr';
import 'toastr/build/toastr.min.css';
import 'basiclightbox/dist/basicLightbox.min.css';

const modal = basicLightbox.create(`
  <div class="modal">
    <p class="modal-text"></p>
    <button class='modal-btn'>закрити</button>
  </div>
`);

const refs = {
  list: document.querySelector('.todo-list'),
  form: document.querySelector('.todo-form'),
  modalText: modal.element().querySelector('.modal-text'),
  modalButton: modal.element().querySelector('button'),
};
console.log(refs.list.tagName === 'UL');
let items = [];
const render = () => {
  const list = items.map(getItemTemplate);

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', list.join(''));
};

const handleSubmit = e => {
  const { value } = e.target.elements.text;
  const payload = {
    text: value,
    isDone: false,
    created: new Date(),
  };
  e.preventDefault();
  createTodo(payload).then(newTodo => {
    console.log(newTodo);
    items.push(newTodo);
    render();
    refs.form.reset();
  });

  // toastr.success('Todo created successfully');
};
const toggleItem = id => {
  const item = items.find(item => item.id === id);
  items = items.map(item =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item
  );
  updateTodo(id, { ...item, isDone: !item.isDone });
};
const viewItem = id => {
  const { created } = items.find(item => item.id === id);

  refs.modalText.textContent = moment(created).format('YYYY-MM-DD HH:mm');
  modal.show();
};

const deleteItem = id => {
  items = items.filter(item => item.id !== id);
  deleteTodo(id).then(() => {
    render();
    toastr.success('Todo deleted successfully');
  });
};

const handleListClick = e => {
  if (e.target === e.currentTarget) return;

  const { action } = e.target.dataset;
  const parent = e.target.closest('li');
  const { id } = parent.dataset;

  switch (action) {
    case 'toggle':
      toggleItem(id);
      break;

    case 'view':
      viewItem(id);
      break;

    case 'delete':
      deleteItem(id);
      break;
  }
};

const handleKeyPress = ({ code }) => {
  if (code === 'Escape' && modal.visible()) {
    modal.close();
  }
};
const loadData = () => {
  items = reedTodos();
};

// run
reedTodos().then(data => {
  items = data;
  render();
});

// add event listeners
refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleListClick);
refs.modalButton.addEventListener('click', modal.close);

window.addEventListener('keydown', handleKeyPress);
