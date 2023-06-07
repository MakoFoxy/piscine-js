
// str = "*"
// num = 10

function pyramid(str, num) {
    let res = ""
    for(let i = 1; i <= num; i++) {
        res += ' '.repeat(num - i).repeat(str.length)
        res += str.repeat(i * 2 - 1)
        // for(let v = 0; v < i; v++)  {
        //     res = res + str
            if (i == num) {
                return res
            }
            res =  res + '\n'
    }
    
return res
}

// console.log(pyramid(str, num))