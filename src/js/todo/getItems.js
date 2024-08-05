import toastr from 'toastr';

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

export const createTodo = payload => {
  localStorage.setItem('todos', JSON.stringify(payload));
};

export const fetchTodos = () => {
  try {
    toastr.success('Todos loaded successfully');
    return JSON.parse(localStorage.getItem('todos')) || [];
  } catch (error) {
    toastr.error("can't load todos");
    return [];
  }
};

export const updateTodo = payload => {
  localStorage.setItem('todos', JSON.stringify(payload));
};

export const deleteTodo = payload => {
  localStorage.setItem('todos', JSON.stringify(payload));
};
