
//var arr = [1, 2, 3 , [4, 5]]

function flat(arr, num = 1) {
    let result = [];

    (function flatfunc(arr, num) {
        arr.forEach(function(fl) {
            if (Array.isArray(fl) && num > 0) flatfunc(fl, num -1);
            else result.push(fl);
        });
    })(arr,num);
    return result
}


//console.log(flat(arr))