import toastr from 'toastr';
import axios from 'axios';
export const getItemTemplate = ({
  id,
  isDone,
  text,
}) => `<li class="todo-item" data-id="${id}">
  <div>
    <input
      data-action="toggle"
      type="checkbox"
      ${isDone ? 'checked' : ''}
    />
    <span>${text}</span>
  </div>
  <div class="buttons">
    <button data-action="view" class="todo-btn" type="button">view</button>
    <button data-action="delete" class="danger-btn" type="button">x</button>
  </div>
</li>`;

// const URL = 'https://66b1506f1ca8ad33d4f3e458.mockapi.io';

axios.defaults.baseURL = 'https://66b1506f1ca8ad33d4f3e458.mockapi.io';

// export const createTodo = payload => {
//   return fetch(`${URL}/todos`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   }).then(resp => resp.json());
// };

export const createTodo = payload =>
  axios.post(`/todos`, payload).then(({ data }) => data);
// export const fetchTodos = () => {
//   return fetch(`${URL}/todos`)
//     .then(resp => resp.json())
//     .catch(() => []);
// };

export const fetchTodos = () =>
  axios
    .get(`/todos`)
    .then(({ data }) => data)
    .catch(() => []);

// export const updateTodo = (id, payload) => {
//   return fetch(`${URL}/todos/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   })
//     .then(resp => resp.json())
//     .catch(() => []);
// };

export const updateTodo = (id, payload) =>
  axios
    .put(`/todos/${id}`, payload)
    .then(({ data }) => data)
    .catch(() => []);

// export const deleteTodo = id => {
//   return fetch(`${URL}/todos/${id}`, { method: 'DELETE' })
//     .then(resp => resp.json())
//     .catch(() => []);
// };
export const deleteTodo = id =>
  axios
    .delete(`/todos/${id}`)
    .then(({ data }) => data)
    .catch(() => []);
