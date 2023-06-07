//var num = 5
// var is = {
//     n: 5,
//     st: "hello world",
//     choice: false,
//     undefo: undefined,
//     defo: undefined, 
//     array: [],
//     object: {my: "werty"},
//     func: function(){},
//     trt: true,
//     fols: false,
//     nan1: NaN
// } 

// num = "gddf"
// console.log(is)
// console.log(is.num)

is.num = function(num) {
    return typeof num == "number"
}

is.nan = function(nan) {
    return typeof nan === "number" && isNaN(nan)
}
// console.log(is)
// console.log(is.num)
// console.log(is.num(is.n))

// console.log(is)
// console.log(is.st)

is.str = function(str) {
    if (typeof (str) === "string") {
        return true
    }
    return false
}

// console.log(is)

// console.log(is.str)
// console.log(is.str(is.st))

is.bool = function(bool) {
    if (typeof bool == "boolean")  {
        return true
    }
    return false
}
// console.log(is)
// console.log(is.bool)
// console.log(is.bool(is.choice))

is.undef = function(undef) {
    if (typeof undef == "undefined")  {
        return true
    }
    return false
}
// console.log(is)
// console.log(is.undef)
//  console.log(is.undef(is.undefo))

is.def = function(def) {
    if (typeof def != "undefined")  {
        return true
    }
    return false
}
// console.log(is)true
// console.log(is.def(is.defo))

// is.arr = function(arr) {

//     if (arr === [])  {
//         return true
//     }
//     return false
// }

is.arr = function(arr) {
    if (Array.isArray(arr))  {
        return true
    }
    return false
}
// console.log(is)
// console.log(is.arr)
// console.log(is.arr(is.array))

is.obj = function(obj) {
    if ( typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
        return true
    }func
    return false
}

is.obj = function(obj) {
    if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
        return true
    }
    return false
}
// console.log(is)
// console.log(is.obj)
// console.log(is.obj(is.object))

is.fun = function(fun) {
    if (typeof fun === 'function') {
        return true
    }
    return false
}
// console.log(is)
// console.log(is.fun)
// console.log(is.fun(is.func))

is.truthy = function(truthy) {
    if (truthy) {
        return true
    }
    return false
}


is.falsy = function(falsy) {
    if (falsy) {
        return false
    }
    return true
}



// console.log(is.nan(is.nan1))
// console.log("5" === [5])
// console.log(is)
// console.log(is.fun)
// console.log(is.fun(is.trt))
// if (1){
//     console.log(true)
// } else {
//     console.log(false)
// }-