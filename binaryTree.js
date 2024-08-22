class BinaryTree {
    #Node = class {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    constructor() {
        this.root = null;
    }

    insert(value) {
        try {
            const newNode = new this.#Node(value);
    
            if ( this.isEmpty() ) {
                this.root = newNode;
            } else {
                this.#insertNode(this.root, newNode);
            }
        } catch(err) {
            console.error('Something went wrong: ' + err.message)
        }
    }

    #insertNode(node, newNode) {
        if (newNode.value === node.value)
            throw new Error('This value already exists');

        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.#insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.#insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.#searchNode(this.root, value);
    }

    #searchNode(node, value) {
        if (!node) return false;

        if (value < node.value) {
            return this.#searchNode(node.left, value);
        } else if (value > node.value) {
            return this.#searchNode(node.right, value);
        } else {
            return true;
        }
    }

    static toArray(bt) {
        return bt.searchTree(bt.root);
    }

    searchTree(node) {
        if(!node) return [];

        let leftElements = this.searchTree(node.left);
        let rightElements = this.searchTree(node.right);
        return [
            ...leftElements,
            node.value,
            ...rightElements
        ];
    }

    static printTree(node) {
        if (!node) return null;

        BinaryTree.printTree(node.left);
        console.log(node.value);
        BinaryTree.printTree(node.right);
    }

    sumTree(node) {
        if (!node) return 0;

        let leftSum = this.sumTree(node.left);
        let rightSum = this.sumTree(node.right);
        return node.value + leftSum + rightSum;
    }

    minimunValue() {
        let currentNode = this.root;

        while(currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    isEmpty() {
        return !this.root;
    }

    maxPathSum(node) {
        if (!node) return -Infinity;

        if (!node.left && !node.right)
            return node.value;

        let leftSum = this.maxPathSum(node.left);
        let rightSum = this.maxPathSum(node.right);

        return node.value + Math.max(leftSum, rightSum);

    }
}

function runTests() {
    let bt;

    // Test 1: Create an empty tree and check if it's empty
    bt = new BinaryTree();
    console.assert(bt.isEmpty() === true, 'Test 1 Failed: Tree should be empty initially');

    // Test 2: Insert a value into the tree and check if it's no longer empty
    bt.insert(10);
    console.assert(bt.isEmpty() === false, 'Test 2 Failed: Tree should not be empty after insertion');
    console.assert(bt.root.value === 10, 'Test 2 Failed: Root should be 10');

    // Test 3: Insert multiple values and check the tree structure
    bt.insert(5);
    bt.insert(15);
    bt.insert(3);
    bt.insert(7);
    bt.insert(12);
    bt.insert(18);

    console.assert(bt.root.left.value === 5, 'Test 3 Failed: Left child of root should be 5');
    console.assert(bt.root.right.value === 15, 'Test 3 Failed: Right child of root should be 15');
    console.assert(bt.root.left.left.value === 3, 'Test 3 Failed: Left child of 5 should be 3');
    console.assert(bt.root.left.right.value === 7, 'Test 3 Failed: Right child of 5 should be 7');
    console.assert(bt.root.right.left.value === 12, 'Test 3 Failed: Left child of 15 should be 12');
    console.assert(bt.root.right.right.value === 18, 'Test 3 Failed: Right child of 15 should be 18');

    // Test 4: Search for values in the tree
    console.assert(bt.search(10) === true, 'Test 4 Failed: Should find 10 in the tree');
    console.assert(bt.search(5) === true, 'Test 4 Failed: Should find 5 in the tree');
    console.assert(bt.search(18) === true, 'Test 4 Failed: Should find 18 in the tree');
    console.assert(bt.search(1) === false, 'Test 4 Failed: Should not find 1 in the tree');
    console.assert(bt.search(20) === false, 'Test 4 Failed: Should not find 20 in the tree');

    // Test 5: Insert a duplicate value and ensure tree structure remains valid
    bt.insert(10);
    console.assert(bt.root.left.value === 5, 'Test 5 Failed: Tree structure should remain valid after inserting a duplicate');

    // Test 6: Ensure `printTree` function works without errors
    console.log('Printing tree:');
    BinaryTree.printTree(bt.root);

    //Test 7: Ensure `searchTree` function works without erres
    console.log('Converting tree to array: ');
    BinaryTree.toArray(bt);

    //Test 8: Ensure `sumTree` function works witout erres
    console.log('Summing all values of the tree: ');
    console.assert(bt.sumTree(bt.root) === 70, "Test 8 Failed: It should return the sum of all the tree which is 80");
    
    //Test 9: Ensure `minimumValue` function works properly
    console.log('Finding the minimun value: ');
    console.assert(bt.minimunValue(bt.root) === 3 , "Test 9 Failed, minimun value returned is not 3");

    //Test 10. Maximun sum of a path from a leaf to the root
    console.assert(bt.maxPathSum(bt.root) === 43, "Test 10 Failed, maximun value returned is not 43")
    console.log(bt.maxPathSum(bt.root))
    console.log('All tests passed.');
}

runTests();