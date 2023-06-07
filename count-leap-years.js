

// function countLeapYears(date) {
//     var res = 0
//     for (let i = 1; i < date; i++) {
//         (res = date / 4) 
//     }
//     return res
// }

function isLeapYear(data){
    const year = data;
    let flag = false
    if(year%4===0){
        flag = true
    }
    if(year%100===0){
        flag = false
    }
    if(year%400===0){
        flag =true
    }
    return flag
}
function countLeapYears(date){
    let count = 0
    const year = date.getFullYear();
    for (let i = year;i>4;i--){
        if(isLeapYear(i)){
            count++
        }
    }
    return count
}
//console.log(countLeapYears(2020))