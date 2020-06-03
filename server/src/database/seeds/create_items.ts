import Knex from 'knex';

export async function seed(knex:Knex) {
  await knex('items').insert([
    { title: 'Lamp', image: 'lamp.svg' },
    { title: 'Batteries', image: 'batterie.svg' },
    { title: 'Papers and cardboard', image: 'papers.svg' },
    { title: 'Electronic waste', image: 'eletronic.svg' },
    { title: 'Organic waste', image: 'organic.svg' },
    { title: 'kitchen oil', image: 'oil.svg' },
  ])
}