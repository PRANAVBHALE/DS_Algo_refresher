function bubbleSort(arr){

    let temp //empty temp

    //1st pass for iterating across array
    for (let i = 0; i < arr.length; i++) {

        //2nd pass for comparision
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j] //fill temp with big value
                arr[j] = arr[j+1] //fill vacanted place of big value with small value
                arr[j+1] = temp // fill temp i.e. big value at place of small value
            }
        }    
    }
    return arr
}

let arr = [9,-8,7,-6,5,-4,3,-2,1,0]

console.log(bubbleSort(arr))