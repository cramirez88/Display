// Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single JavaScript file for this assignment, it may be the same from the Fronts assignment. All examples are done in order, starting with a new instance of the SLL class.

// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

class SLLNode {
  constructor(val) {
      this.value = val;
      this.next = null;
  }
}

class SLL {
  constructor() {
      this.head = null;
  }
  addFront(value) {
      var newNode = new SLLNode(value);
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
  }
  removeFront() {
      if (this.head == null) {
          return this.head;
      }
      var removedNode = this.head;
      this.head = removedNode.next;
      removedNode.next = null;
      return this.head;
  }
  front() {
      if (this.head == null) {
          return null;
      } else { // List is not empty
          return this.head.value;
      }
  }
  display() {
      var listStr = "";
      if (this.head == null) {
          return "Empty list";
      }
      listStr += this.head.value;
      var runner = this.head.next;
      while (runner != null) {
          listStr += ", " + runner.value;
          runner = runner.next;
      }
      return listStr;
  }
}

var mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);
console.log(mySLL);
console.log(mySLL.display());
