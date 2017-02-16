  const Node = require('./node');

  class LinkedList {
    constructor() {
      this.length = 0;;    
      this._head = null;   
      this._tail = null;
    }

    append(data) {
      var node = new Node(data);
      if (this.length == 0) {
        this._head = node;
        this._tail = node;
      }
      else {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {
      if (this.length == 0) {
        return null;
      }
      return this._head.data; 
    }

    tail() {
      if (this.length == 0) {
        return null;
      } 
      return this._tail.data;       
    }



    at(index) {
      if (index > this.length-1 || index < 0 ){
        return null;
      }
      var node = this._head;

      for  (var i=0;i<index;i++) { 
        node = node.next;
      }
      return node.data;
    }

    insertAt(index, data) {
      if (index > this.length-1 || index < 0){  
        return null;
      }

      var current = this._head; 
      for (var i = 0; i < index; i++) {                                                   
       current = current.next;           
     }
     var node = new Node(data);   
     var previous = current.prev;
     node.prev = previous;
     node.next = current;
     current.prev = node;

     if (previous != null){         
       previous.next = node;
     }
     this.length++; 
     return this;        
   }


   isEmpty() {
    return this.length === 0;
  }

  clear() {
    this._head = null;
    this._tail =  null;
    this.length = 0;
    return this;
  }

  deleteAt(index) {

    if (index >-1 && index < this.length){

      var current = this._head;

      if (index === 0){
        this._head = current.next;  
        if (this.length===1){ 
          this._tail = null;
        } else {
          this._head.prev = null;
        }              
      } 

      else if (index == this.length -1){
        current = this._tail;
        this._tail = current.prev;
        this._tail.next = null;
      } 

      else {
        for (var i=0; i<index; i++) { 
         current = current.next;
       }
       current.prev.next = current.next;
     }

     this.length--;
     return this; 
   }
   else return null;

  }

  reverse() {

    var left = this._head;
    var right = this._tail;

    for (var i = 0; i < Math.floor(this.length / 2); i++) {
      var data = left.data;
      left.data = right.data; 
      right.data = data;

      left = left.next;
      right = right.prev;
    }
    return this;

  }

  indexOf(data) {
    var node = this._head;                     
    for  (var  i=0; i<this.length;i++) { 
      if (node.data == data) {
        return i;
      }
      node = node.next;
    }
    return -1;
  }
  }

  module.exports = LinkedList;




