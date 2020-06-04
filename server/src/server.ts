import express, { response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

// Route: Complete address of the requisition.
// Recourse: Entity that we are accessing.
// Get : Search informations on back-end.
// Post: Create a new information on back-end.
// Migrations: Historic of the db.

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '...', 'uploads' )));

app.listen(3333);