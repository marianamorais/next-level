import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
  //SELECT * FROM items
  const items = await knex('items').select('*');

  const serializedItems = items.map(item => {
    return 1;
  })

  return response.json(items);
});

export default routes;