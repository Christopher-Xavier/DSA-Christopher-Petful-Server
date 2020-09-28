const Queue = require('../queue/Queue');
const store = require('../../store');
const PetsService = require('../pets/pets.service');

// Set up initial data //
const people = new Queue();
store.people.forEach(person => people.enqueue(person));

//Return ALL PEOPLE in the list
function get() {
  return people.all();
}

//Add a NEW PERSON to the list
function enqueue(newPerson) {
  people.enqueue(newPerson);
}

//Remove a PERSON from the list
function dequeue() {
  return people.dequeue();
}

const petTypes = [
  'dogs',
  'cats'
];

//RANDOMIZE ITEMS added to lists
function randomize(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

//Remove PERSON from list (time = 5000ms)
function removeFromQueue() {
  if (store.people.includes(people.show())) {
    dequeue();
    PetsService.dequeue(randomize(petTypes));
  }
}
setInterval(() => removeFromQueue(), 5000);
/************************************************** */


//Add PERSON to list IF less than 5 PEOPLE (time = 5000ms)
function addToQueue() {
  if (people.length < 5) {
    people.enqueue(randomize(store.people));
    PetsService.enqueue('dogs', randomize(store.dogs));
    PetsService.enqueue('cats', randomize(store.cats));
  }
}
setInterval(() => addToQueue(), 5000);
/************************************************** */

module.exports = {
  get,
  enqueue,
  dequeue,
};