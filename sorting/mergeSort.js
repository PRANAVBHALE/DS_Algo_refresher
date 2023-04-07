function merger(left,right){
    
    let result = []

    while(left.length && right.length){

        if (left[0] < right[0]) {
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }

    return [...result,...left,...right]
}

let left = [ -5, 0 ]
let right = [ 7 , 10]

//test sample
//console.log(merger(left,right))

function mergeSort(arr) {
    
    //basecase
    if (arr.length === 1) {
        return arr
    }

    //get mid of array
    let mid = Math.floor(arr.length/2)

    //split array from mid as left and right
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    //use merger method to merge and do recurssive case calls
    return  merger(mergeSort(left),mergeSort(right))
}

let arr = [9,-8,7,-6,5,-4,3,-2,1,0]

console.log(mergeSort(arr))