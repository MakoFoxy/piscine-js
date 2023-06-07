

//var str = 'helfsdfsdlo'


function cutFirst(str) {
    var res =  "";
    for(let i=2; i < str.length; i++){
        res = res + str[i]
    }
    return res

}

function cutLast(str) {
    var res =  "";
    for(let i=str.length-3; i >=0; i--){
        res = str[i] + res
    }
    return res
}

function cutFirstLast(str) {
    var res = "";
    var res2 = "";
    for(let i=str.length-3; i >=0; i--){
        res = str[i] + res
    }

    for(let i=2; i < res.length; i++){
        res2 = res2 + res[i]
    }
    return res2

}

function keepFirst(str) {
    return str.slice(0, 2)

}

function keepLast(str) { 
    return str.slice(str.length - 2, str.length)

}

function keepFirstLast(str) {
    if (str.length >= 4) {
        return keepFirst(str) + keepLast(str)
    }
    else {
        return str
    }

}

//console.log(keepFirstLast(str))g