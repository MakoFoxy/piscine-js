function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}


function isFriday(date) {
    // if (str == 'Friday') {
    //     return true
    // } else {
    //     return false
    // }
    let friday = getWeekDay(date)
    return friday === 'Friday';
}
function isWeekend(date) {
    let friday = getWeekDay(date)
    console.log(friday)
    return friday === 'Saturday' || friday === 'Sunday';
    // if (str == 'Saturday' || str == 'Sunday') {
    //     return true
    // } else {
    //     return false
    // }
}

function isLeapYear(str) {
    //var Feb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
    let year = str.getFullYear()
    let flag = false
    if (year % 4 === 0) {
        flag = true
    }
    if (year % 100 === 0) {
        flag = false
    }
    if (year % 400 === 0) {
        flag = true
    }
    return flag
    // if ((year % 4 == 0)) {
    //     for (let i = 1; i <= Feb.length; i++) {
    //         if (Feb[i] == 29) {
    //             return true
    //         }
    //     }
    // } else {
    //     return false
    // }
}





function isLastDayOfMonth(date) {
    let month = date.getMonth()
    date.setHours(30)
    let getMonth = date.getMonth()
    return month !== getMonth;
//     var day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

//    // var days = [31, 29, 31]

//     var mounth1 = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September', 'October', 'November', 'December'
//     ]
//     for (let i = 0; i < mounth1.length; i++) {
        
//         if (mounth == mounth1[i] && mounth1[i] != 'February') {
//             for (let j = 0; j < day.length; j++) {   
//                 //return date[i].length-1    
//                 if (day[j] == daym && daym == 31) {
//                     return true              
//                 }
//             }
//         } else {
//             for (let k = 0; k < day.length; k++) {
//                 if (day[k] == daym && daym == 29) {
//                     return true
//                 }
//             }
//         }
       
//     } 
//     return false

}

//console.log(isLastDayOfMonth('January', 25))