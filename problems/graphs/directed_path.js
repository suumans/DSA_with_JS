/*
 Given two nodes (start and destination) in a directed acyclic graph (DAG), return true if there is a directed path from start to destination. Otherwise, return false.

 Example 1:

 Input: start = 1, destination = 3
 Output: true
 Elploration: There is a directed path 1 -> 2 -> 3.

 Example 2:

 Input: start = 1, destination = 4
 Output: false
 Exploration: There is no directed path 1 -> 4.

 */

 function hasPathDFS(graph, start, destination) {

    const stack = [start]; // Initialize a stack with the starting node
    const visited = new Set(); // Initialize a set to keep track of visited nodes

    while (stack.length > 0) { // Continue the loop while the stack is not empty
        const node = stack.pop() // Pop the top node from the stack

        if( node === destination) { // If the node is the destination
            return true; // Return true
        }
        if (!visited.has(node)) { // If the node has not been visited
            visited.add(node); // Mark the node as visited
            for (const neighbour of graph[node]) { // Iterate through the neighbors of the current node
                stack.push(neighbour); // Add the neighbor to the stack for further exploration
            }
        }
    }

    return false;
 }


 // Bradth First Search

 function hasPathBFS (graph, start, destination) {

    const queue = [start]; // Initialize a queue with the starting node
    const visited = new Set(); // Initialize a set to keep track of visited nodes

    while (queue.length > 0) { // Continue the loop while the queue is not empty
        const node = queue.shift() // Remove the first node from the queue
        if( node === destination) { // If the node is the destination
            return true; // Return true
        }

        if (!visited.has(node)) { // If the node has not been visited
            visited.add(node); // Mark the node as visited
            for (const neighbour of graph[node]) { // Iterate through the neighbors of the current node
                queue.push(neighbour); // Add the neighbor to the queue for further exploration
            }
        }
    }

    return false;
 }


 // Recursive


 function hasPathRec(graph, start, destination, visited = new Set()) {

    if( start === destination) { // If the start node is the destination
        return true; // Return true
    }

    visited.add(start); // Mark the start node as visited
    
    for (const neighbour of graph[start]) { // Iterate through the neighbors of the current node
        if (hasPathRec(graph, neighbour, destination) === true) { // Call the function for each neighbor
            return true; // Return true if a path is found
        }
    }
    return false;
 }