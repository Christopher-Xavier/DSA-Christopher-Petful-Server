/* eslint-disable strict */

const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

/************************/

module.exports = {

  //GET pets next in line
  get() {
    return {
      cat: pets.cats.show(),
      dog: pets.dogs.show(),
    };
  },

  //REMOVE a pet from the list
  dequeue(type) {
    return pets[type].dequeue();
  },

  //ADD a pet to the list
  enqueue(type, data) {
    return pets[type].enqueue(data);
  },
};