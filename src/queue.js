const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = [];
    
}

  getUnderlyingList() {
  
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //return this.queue;
    return this.queue.reduce((bf, cr) => {
      if (!bf) {
        return {
          value: cr,
          next: null,
        };
      } else {
        let latest = bf;
        while (latest.next) {
          latest = latest.next;
        }
        latest.next = {
          value: cr,
          next: null,
        };
        return bf;
      }
     
    },
    null);
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.queue.push(value);
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.queue.length > 0) {
      return this.queue.shift();   // remove first element
  }
}
}

module.exports = {
  Queue
};
