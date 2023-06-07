

//var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];



function indexOf(arr, t, index=0) {
   if (arr.length > 0){
        for (let i = index; i < arr.length; i++) {
            if (arr[i] == t) {
                return i
            }
        }    
        return -1  
    } else {
        return -1
    }
}



function lastIndexOf(arr, t, index) {
    let count = arr.length;
    let res = -1
    if (index != null) {
        count = index;
    }
    for (let i = 0; i <= count; i++) {
        if (arr[i] == t) {
            res = i;
        }
    }
    return res;    
 }
 
function includes(arr, t) {
    if (arr.length > 0){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == t) {
            return true  
            }
        }      
     } else {
        return false
    }
}

//console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))