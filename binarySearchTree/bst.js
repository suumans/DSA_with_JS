class BSTNode {
    constructor (key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }

    insert (key) {
        const node = new BSTNode(key)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode (node, newNode) {    //node = root node
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    delete (key) {
        this.root = this.deleteNode(this.root, key)
    }

    deleteNode (node, key) {  //node = root node
        if (node === null) {
            return null
        }

        if (key < node.key) {
            node.left = this.deleteNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key)
            return node
        } else {
            if (node.left === null && node.right === null) {
                node = null
                return node
            } else if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            } else {
                let tempNode = this.findMinNode(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node
    }

    findMinNode (node) {
        while(node.left !== null) {
            node = node.left
        }
        return node
    }

    inorderTraversal () {
        const result = []
        this.inorder(this.root, result)
        return result
    }
    inorder(){
        if (node !== null) {
            this.inorder(node.left, result)
            result.push(node.key)
            this.inorder(node.right, result)
        }
    }

    preOrderTraversal () {
        const result = []
        this.preOrder(this.root, result)
        return result
    }
    preOrder(){
        if (node !== null) {
            result.push(node.key)
            this.preOrder(node.left, result)
            this.preOrder(node.right, result)
        }
    }

    postOrderTraversal () {
        const result = []
        this.postOrder(this.root, result)
        return result
    }
    postOrder(){
        if (node !== null) {
            this.postOrder(node.left, result)
            this.postOrder(node.right, result)
            result.push(node.key)
        }
    }
}