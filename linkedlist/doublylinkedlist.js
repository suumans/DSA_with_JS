class Node {
    constructor(data, next = null, prev = null) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null
        this.tail = null
    }
} 

// Indert at Beginning
DoublyLinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data, this.head, null)

    if (this.head !== null) {
        this.head.prev = newNode
    }
    this.head = newNode
    if(this.tail === null) {
        this.tail = newNode
    }
}

// Insert at End
DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data, null, this.tail)

    if (this.tail !== null) {
        this.tail.next = newNode
    }
    this.tail = newNode
    if(this.head === null) {
        this.head = newNode
    }
}

// Insert at a given node

DoublyLinkedList.prototype.insertAfter = function (prevNode, data) {
    if(prevNode == null) {
        console.log("The given previous node is null")
        return
    }

    const newNode = new Node(data, prevNode.next, prevNode)
    if(prevNode.next != null) {
        prevNode.next.prev = newNode
    }
    prevNode.next = newNode

    // Tail
    if(newNode == null) {
        this.tail = newNode
    }
}

// Delete at FirstNode

DoublyLinkedList.prototype.deleteFirstNode = function () {
    if (this.head == null) {
        console.log("List is empty")
        return
    }

    if (this.head == this.tail) {
        this.head = null
        this.tail = null
        return
    } else {
        this.head = this.head.next
        this.head.prev = null
    }
}

// Delete at Last Node

DoublyLinkedList.prototype.deleteLastNode = function () {
    if (this.tail == null) {
        console.log("List is empty")
        return
    }

    if (this.head == this.tail) {
        this.head = null
        this.tail = null
        return
    } else {
        this.tail = this.tail.prev
        this.tail.next = null
    }

}

// Reverse Doubly Linked List

DoublyLinkedList.prototype.reverse = function () {
    let current = this.head
    let temp = null
    while (current !== null) {
        temp = current.prev
        current.prev = current.next
        current.next = temp

        // move to next node
        current = current.prev
    }
    if (temp !== null) {
        this.head = temp
        this.tail = current
    }
}