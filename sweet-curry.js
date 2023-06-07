
// var args= [12]

// function mult2(args) {
//     var res = 1

//     for(let i = 0; i < args.length; i++) {
//         res = args * res
//     }
//     return res
// }

// console.log(mult2(args))


function mult2(a) {
    return function(b) {
        return a * b
    }
  }

 
function add3(a) {    
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
  }


  function sub4(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a - b - c -d
            }
        }
    }
  }
