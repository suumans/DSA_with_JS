class Node{
    constructor(data, next = null){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
}

//insert at beginning
LinkedList.prototype.insertAtBeginning = function(data) {
    const newNode = new Node(data)
    this.head = newNode
}

//insert at end
LinkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data)
    if (!this.head) {
        this.head = newNode;
        return;
    }
    let last = this.head;
    while (last.next) {
        last = last.next;
    }
    last.next = newNode

}

// Insert at given node

LinkedList.prototype.insertAfter = function(prevNode, data) {
    if (!prevNode) {
        console.log("The given previous node is not in the list")
        return
    }
    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}

// Delete the first node

LinkedList.prototype.deleteFirstNode = function() {
    if (!this.head) {
        console.log("List is empty")
        return
    }
    this.head = this.head.next
}

// Delete the last node

LinkedList.prototype.deleteLastNode = function() {
    if (!this.head) {
        console.log("List is empty")
        return
    }

    if (!this.head.next) {
        this.head = null // if there is only one node
        return
    }

    let secondLast = this.head

    while (secondLast.next.next) {
        secondLast = secondLast.next
    }

    secondLast.next = null
}

LinkedList.prototype.deleteByKey = function(key) {

    // if list is empty
    if (!this.head) {
        console.log("List is empty")
        return
    }
    //data found at head
    if (this.head.data === key) {
        this.head = this.head.next
        return
    }

    let current = this.head

    while (current.next !== null) {

        if (current.next.data === key) {
            current.next = current.next.next
            return
        }
        current = current.next
    }

    console.log("Key not found", key);
}

// Search in linked list

LinkedList.prototype.search = function(key) {
    let current = this.head
    while (current) {
        if (current.data === key) {
            return true
        }
        current = current.next
    }
    return false
}

// traversal

LinkedList.prototype.printList = function() {
    let current = this.head

    let listValues = []

    while (current) {
        listValues.push(current.data) // add the data in the list
        current = current.next // move to the next node
    }
    console.log(listValues.join(" -> "));
}

// Reverse a linked list

LinkedList.prototype.reverse = function() {
    let current = this.head
    let prev = null
    let next = null
    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    this.head = prev
}

