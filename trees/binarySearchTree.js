class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if(this.root === null) {
            this.root = node;
            return node;
        }

        let currentNode = this.root;
        while(true){
            if(currentNode.value < node.value) {
                if(!currentNode.right) {
                    currentNode.right = node;
                    return this;
                }
    
                currentNode = currentNode.right;
            } else {
                if(!currentNode.left) {
                    currentNode.left = node;
                    return this;
                }
    
                currentNode = currentNode.left;
            }
        }
    }

    insertRecursive(value, currentNode = this, direction = 'root') {
        const node = new Node(value);

        if(currentNode[direction] === null) {
            currentNode[direction] = node;
            return node;
        }

        if(currentNode[direction].value < node.value) {
            if(!currentNode[direction].right) {
                currentNode[direction].right = node;
                return this;
            }

            this.insert(value,currentNode[direction], 'right');
        } else {
            if(!currentNode[direction].left) {
                currentNode[direction].left = node;
                return this;
            }

            this.insert(value,currentNode[direction], 'left');
        }
    }

    search(value, node = this.root) {
        if(node.value === value){
            return node;
        }

        if(node.value < value) {
            return this.search(value, node.right);
        } else {
            return this.search(value ,node.left);
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(11);
tree.insert(9);
tree.insert(4);
tree.insert(5);
tree.insert(15);
tree.insert(12);
tree.insert(20);
// console.log(tree);
const node = tree.search(4);
console.log(node);