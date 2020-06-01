import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem');

  // JSON

  response.send([
    'Mariana',
    'Cap',
    'Alvaro'
  ]);
});

app.listen(3333);