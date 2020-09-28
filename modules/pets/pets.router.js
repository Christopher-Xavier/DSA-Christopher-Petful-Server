/* eslint-disable strict */

const express = require('express');
const json = require('body-parser').json();
const PetsService = require('../pets/pets.service');

const router = express.Router();

//GET ALL PETS available for adoption
router.get('/', (req, res) => {
  const allPets = PetsService.get();
  return res
    .status(200)
    .send(allPets);
});


//DELETE an ADOPTED PET from list
router.delete('/:pet_type', json, (req, res) => {
  const petType = req.params.pet_type;
  PetsService.dequeue(petType);
  return res
    .status(204)
    .end();
});

module.exports = router;
