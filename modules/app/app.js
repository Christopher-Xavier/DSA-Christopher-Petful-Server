//eslint disabled
const express = require('express');
const cors = require('cors');
const PeopleRouter = require('../people/people.router');
const PetsRouter = require('../pets/pets.router');

const CLIENT_ORIGIN = 'https://dsa-petful-client-james.vercel.app' || 'http://localhost:3000';

const app = express();

app.use(cors({origin: CLIENT_ORIGIN}));

app.use('/api/people', PeopleRouter);
app.use('/api/pets', PetsRouter);

module.exports = app;