
/* eslint-disable strict */

const express = require('express');
const json = require('body-parser').json();
const PeopleService = require('./people.service');

const router = express.Router();

// GET ALL people currently in list
router.get('/', (req, res) => {
  return res.status(200).send(PeopleService.get());
});


// ADD a NEW PERSON to list
router.post('/', json, (req, res) => {
  const newPerson = { ...req.body };
  PeopleService.enqueue(newPerson.name);
  res.status(201).json({message: 'You added a person!'});
});


// DELETE a PERSON from list
router.delete('/', (req, res) => {
  PeopleService.dequeue();
  res.status(204).end();
});

module.exports = router;















