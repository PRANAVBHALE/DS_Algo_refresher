let graph = {
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

function breadthFirstSearch(graph,source) {
    
    let queue = [ source]

    while (queue.length > 0) {
        
        let current = queue.shift()
        console.log(current)

        for(let next of graph[current]){

            queue.push(next)
        }
    }
}

breadthFirstSearch(graph,'a')