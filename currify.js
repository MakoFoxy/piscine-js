

function currify(func) {
    return function curried(...args) {
        if (args.length === func.length) {
            return func(...args);
        }
        return function (...argsNew) {
            return curried(...args.concat(argsNew));
        }
    };
}



// function mult2(a, b) {
//      return function(b) {
//     return a * b
//      } 
//}


// const mult2Curried = currify(mult2)
// console.log(mult2Curried(2)(2))