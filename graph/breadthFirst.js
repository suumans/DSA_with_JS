const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
};


function breadthFirst(graph, start) {

    const queue = [start]; // Initialize a queue with the starting node
    const visited = new Set(); // Initialize a set to keep track of visited nodes

    while (queue.length > 0) { // Continue the loop while the queue is not empty
        const node = queue.shift(); // Remove the first node from the queue
        for (const neighbor of graph[node]) { // Iterate through the neighbors of the current node
            if (!visited.has(neighbor)) { // If the neighbor has not been visited
                visited.add(neighbor); // Mark the neighbor as visited
                queue.push(neighbor); // Add the neighbor to the queue for further exploration
            }
        }
    }
}
