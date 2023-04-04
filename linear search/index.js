function linearSearch(arr,key) {
    if (arr.length <= 0) return `array is empty`

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === key) {
            return `${key} is present at ${i+1} position`
        }
    }

    return `key is not present`
}

let arr = []

console.log(linearSearch(arr,3))