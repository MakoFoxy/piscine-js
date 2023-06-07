

 //var args = [1,2,3,4,5];
 //var args = "'ant', 'bison', 'camel', 'duck', 'elephant'";

function reverse(args) {
    if (Array.isArray(args)) {
    var arr = []
        for(let i = args.length-1; i >= 0; i--) {
            //res = args[i] + res
            arr.push(args[i])
        }   
        return arr
    } else if (typeof args == "string") {
            let res =  "";
            for(let i = args.length-1; i >= 0; i--) {
                //  for(let v = 0; v < args[i]; v++) {
                 res = res + args[i]
                // }
                // if (i != 0) {
                //     res = res + ' '
                // }
            }
        return res
    }
}


//console.log(reverser(args))