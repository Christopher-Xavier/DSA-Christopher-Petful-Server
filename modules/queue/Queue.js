/* eslint-disable strict */

// Create a singly-linked NODE
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a QUEUE with methods
// Set initial data.
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  
  
  // Add some data to the queue.
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if(this.last) {
      this.last.next = node;
    }

    this.length = this.length + 1;
    this.last = node;
  }

  
  // Remove some data from the queue.
  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    this.length = this.length - 1;
    return node.value;
  }

  
  // Return the next item in the queue.
  show() {
    return this.first.value;
  }

  
  // Return all items in the queue.
  all() {
    const results = [];
    let node = this.first;

    for (let i =0; i < this.length; i++) {
      results.push(node.value);
      node = node.next;
    }

    return results;
  }
}

module.exports = Queue;