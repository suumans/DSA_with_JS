class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data)
    }

    pop(){
        this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }

    clear(){
        this.stack = [];
    }

    contains(data){
        return this.stack.includes(data);
    }

    reverse(){
        this.stack.reverse();
    }

    printStack(){
        let str = ""
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n";
        }
        return str
    }
}

// Usage Example
let myStack = new Stack();
myStack.push(1);
myStack.push(3);
myStack.push(5);
myStack.pop();

console.log(myStack.printStack())