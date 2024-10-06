const { v4: uuidv4 } = require('uuid');
const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;
console.log(uuidv4());

const users = [
  { name: 'Bobby', age: 15 },
  { name: 'Peter', age: 20 },
  { name: 'Chris', age: 25 },
  { name: 'David', age: 30 },
];
let todos = [
  {
    text: 'Сало',
    isDone: true,
    created: '2024-08-23T08:23:46.971Z',
    id: '2',
  },
  {
    text: 'Хліб',
    isDone: true,
    created: '2024-08-23T08:23:54.580Z',
    id: '3',
  },
  {
    text: 'Молочна ковбаса',
    isDone: false,
    created: '2024-08-23T08:24:11.884Z',
    id: '4',
  },
  {
    text: 'Чай, кофе',
    isDone: false,
    created: '2024-08-23T08:24:39.467Z',
    id: '5',
  },
  {
    text: 'Сіль, перець, олія',
    isDone: false,
    created: '2024-08-23T08:26:03.178Z',
    id: '6',
  },

  {
    text: 'Кетчуп, майонез',
    isDone: true,
    created: '2024-08-23T08:28:18.739Z',
    id: '7',
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/todos', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*') or res.header('Access-Control-Allow-Origin', 'http://localhost:1234/');
  // THIS TIME DESIGION is 'npm i cors'
  res.json(todos);
});
app.post('/todos', function (req, res) {
  let reqBody = req.body;
  reqBody.id = Math.random().toString(16).slice(2);
  todos.push(reqBody);
  res.send(reqBody);
});

app.put('/todos/:id', function (req, res) {
  let id = todos.findIndex(({ id }) => id === req.params.id);
  todos[id] = req.body;
  res.json(todos);
});

app.delete('/todos/:id', (req, res) => {
  // console.log('id-', req.params.id);
  // console.log('?-', req.query.size);
  todos = todos.filter(({ id }) => id !== req.params.id);
  res.json(todos);
});

// ----------------------test endpoints--------------------
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.json(users);
});
// ----------------------test endpoints--------------------

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
