let graph = {
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

function depthFirstSearch(graph,source) {
    
    let stack = [source]

    while (stack.length > 0) {
        
        let current = stack.pop()
        console.log(current)

        for (let next of graph[current])  {
           
            stack.push(next)
        }
    }

}

depthFirstSearch(graph,'a')