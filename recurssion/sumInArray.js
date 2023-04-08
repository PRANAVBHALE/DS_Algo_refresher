let arr = [4,2,6,1,0,-4,-1]

function sum(arr){

    //base case
    if (arr.length === 0) {
        return 0
    }

    let remainingArr = arr.slice(1)

    //recurssive case
    return arr[0] + sum(remainingArr)
}


console.log(sum(arr))