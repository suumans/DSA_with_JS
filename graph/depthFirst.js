// Define a graph using an object structure with keys representing nodes and values representing neighbors
const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
};

// Iterative Depth First Search function
function depthFSIterative(graph, start) {
    const stack = [start]; // Initialize a stack with the starting node
    const visited = new Set(); // Initialize a set to keep track of visited nodes

    while (stack.length > 0) { // Continue the loop while the stack is not empty
        const node = stack.pop(); // Pop the top node from the stack

        if (!visited.has(node)) { // If the node has not been visited
            visited.add(node); // Mark the node as visited
            for (const neighbour of graph[node]) { // Iterate through the neighbors of the current node
                if (!visited.has(neighbour)) { // If the neighbor has not been visited
                    stack.push(neighbour); // Add the neighbor to the stack for further exploration
                }
            }
        }
    }
}

// Recursive Depth First Search function
function depthFSR(graph, start, visited = new Set()) {
    if (!visited.has(start)) { // If the start node has not been visited
        visited.add(start); // Mark the start node as visited
        for (const neighbour of graph[start]) { // Iterate through the neighbors of the start node
            depthFSR(graph, neighbour, visited); // Call the function for each neighbor
        }
    }
}