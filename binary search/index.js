function binarySearch(arr,key){

    if (arr.length <= 0) return `array is empty`

    let startIndex = 0
    let lastIndex = arr.length
    
    while (startIndex <= lastIndex) {
        let midIndex = Math.floor((lastIndex + startIndex)/2)

        if (arr[midIndex] === key) {
            return `${key} is present at ${midIndex + 1}`
        }else{
            if (arr[midIndex] > key) {
                lastIndex = midIndex - 1
            } else {
                startIndex = midIndex + 1
            }
        }
    }

    return `key is not present in array`

}

let sortedArray = [11,22,33,44,55,66,77,88,99]

console.log(binarySearch(sortedArray,6))