
// str = "*"
// num = 5

function triangle(str, num) {
    let res = ""
    for(let i = 0; i <= num; i++) {
        for(let v = 0; v < i; v++)  {
            res += str
            if ((v == i - 1) && (i != num)) {
                res += '\n'
            }
        }
    } 
return res
}

//console.log(triangle(str, 5))