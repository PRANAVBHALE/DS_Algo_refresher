function factorial(n) {
    
    //base case
    if (n === 1) return n

    //recurssive case
    return n * factorial(n - 1)
}

console.log(factorial(1)) //1       = 1
console.log(factorial(2)) //2*1     = 2
console.log(factorial(3)) //3*2*1   = 6
console.log(factorial(4)) //4*3*2*1 = 24