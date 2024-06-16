function biggestIsland(graph) {

    const visited = new Set();
    let largest = 0;

    function dfs(node) {  // Depth First Search
        if (visited.has(node)) { // If the node has been visited
            return 0;
        }
        visited.add(node); // Mark the node as visited
        let size = 1;
        for (const neighbour of graph[node]) { // Iterate through the neighbors of the current node
            size += dfs(neighbour); // Call the function for each neighbor
            // size = size + dfs(neighbour)
        }
        return size
    }

    // iterate over graph

    for (const node in graph) { // Iterate through the nodes of the graph
        if (!visited.has(node)) { // If the node has not been visited
            const componentSize = dfs(node); // Call the function for each unvisited node
            if (componentSize > largest) { // If the component size is larger than the current largest
                largest = componentSize // Update the largest
            }
        }
    }
}