

//var num = 0


function sign(num) {
    if (num > 0) {
        return 1
    } else if (num < 0) {
        return -1
    } else {
        return 0
    }
}

// var num1 = -2
// var num2 = -1

function sameSign(num1, num2) {
    if (sign(num1) == sign(num2)) {
        return true
    } 
    return false
}


//console.log(sign(num))
//console.log(sameSign(num1, num2))