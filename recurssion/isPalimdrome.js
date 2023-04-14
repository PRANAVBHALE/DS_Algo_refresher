function isPalimdrome(str) {
    
    //base case
    if (str.length === 0 || str.length === 1) {
        return true
    }

    debugger
    if (str.charAt(0) === str.charAt(str.length - 1) ) {
        return isPalimdrome(str.substring(1,str.length - 1))
    }
    return false
}

console.log(isPalimdrome(""))
console.log(isPalimdrome("a"))
console.log(isPalimdrome("wow"))
console.log(isPalimdrome("nitin"))
console.log(isPalimdrome("pranav"))
console.log(isPalimdrome("rohan"))
console.log(isPalimdrome("wohw"))