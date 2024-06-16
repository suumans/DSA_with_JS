/*
 
const edges = [
    ['b', 'a'];
    ['c', 'a'];
    ['b', 'c'];
    ['q', 'r'];
    ['q', 's'];
    ['q', 'u'];
    ['q', 't'];
];

const graph = {
    b: [a, c]
    a: [b, c]
    c: [a, b]
    e: []
}

 loop => check if Doesn't exist, then add key => push both

 Write a function, undirectedPath, that takes in an array of edges for an undirectded graph and two nodes.

 After that you can find the node path etc.
 Take care of cycle via visited technique.
 
 */ 

 function createGraph(edges) {

    const graph = {};

    for (const edge of edges) {

        const [a, b] = edge; 

        if (!(a in graph)) { //
            graph[a] = [];
        }
        if (!(b in graph)) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
 }

 // find a path from start to destination

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


 function finalFunctionBudle (edges, start, destination) {
    const graph = createGraph(edges);
    return hasPathBFS(graph, start, destination);
 }