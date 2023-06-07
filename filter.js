function filter(arr, callback){
    let newArr = []
    let res = []
    for (let i=0; i< arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
   }
    for (let i=0; i< newArr.length; i++) {
       if (newArr[i] === true){
        res.push(arr[i])
       }
    }
   return res
}
function reject(arr, callback){
    let newArr = []
    let res = []
    for (let i=0; i< arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
   }
    for (let i=0; i< newArr.length; i++) {
       if (newArr[i] !== true){
        res.push(arr[i])
       }
    }
   return res
}

function partition(arr, callback){
    let newArr = []
    let resTrue = []
    let resFalse = []
    let res = []
    for (let i=0; i< arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
   }
    for (let i=0; i< newArr.length; i++) {
       if (newArr[i] === true){
        resTrue.push(arr[i])
       } else {
        resFalse.push(arr[i])
       }
    }
    res.push(resTrue, resFalse)
   return res
}