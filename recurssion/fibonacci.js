function fibonacci(n) {
    
    //base case
    if (n === 1 || n === 2) {
        return 1
    }

    //recurssive case
    return fibonacci(n-2) + fibonacci(n -1)
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))