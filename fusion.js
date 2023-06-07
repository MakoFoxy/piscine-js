
// var obj = {
//     name : "Jack",
//     age: 18,
//     std : 12,
//     fees : 5000
// }
// var obj2 = {
//     name : "Tim",
//     age: 24,
//     std : 17,
//     fees : 7000
// }
// var obj3 = {
//     name : "salem",
  
// }
// var obj4 = {
//     name : "alem",
   
// }
// var obj5 = {
//     a : 10,
//     b : 8,
//     c : 1
// }
// var obj6 = {
//     a : 10,
//     b : 2
//    }
// function fusion(obj, obj2) {  
//     let res = {}
//         allSpan = Object.values(obj);
//         allParas = Object.values(obj2);
//     res = allParas.concat(allSpan);
//     return res
// }

// function fusion(obj3, obj4) {  
//     let res = []
//         allSpan = Object.values(obj3);
//         allParas = Object.values(obj4);
//     res = allParas.concat(allSpan);
//     let resstr = ''
//     let resarr = []
//    // let resobj = {}

//     for (let i = 0; i < res.length; i++) {
//         resstr = res[i] + ' ' + resstr
//     }
//     //resarr.push(resstr)
//     // resobj = Object.fromEntries(resarr);  

//     resarr.push({
//     str: resstr
//     });

//     for (let i = 0; i < resarr.length; i++) {
//         return resarr[i]
//     }
   
// }

// function fusion(obj3, obj4) {  
//     let res = []
//         allSpan = Object.values(obj3);
//         allParas = Object.values(obj4);

    
//     let resint1 = []
//     let temp = 0
  
//         res.push(allSpan, allParas)
//         for (let i = 0; i < res[0].length; i++) {            
//             for (let j = temp; j < res[1].length; j++) {
//                 if (i == j) {
//                 resint1.push(res[0][i] + res[1][j])
//                 temp = j+1
//                 } else if(i > j) {
//                     resint1.push(res[0][i]) 
//                 } 
//             }
//         }
   

//     res = allParas.concat(allSpan);
//     let resstr = ''
//     let resarr = []
//    // let resobj = {}

//     for (let i = 0; i < res.length; i++) {
//         resstr = res[i] + ' ' + resstr
//     }
//     //resarr.push(resstr)
//     // resobj = Object.fromEntries(resarr);  

//     resarr.push({
//     str: resstr
//     });

//     for (let i = 0; i < resarr.length; i++) {
//         return resarr[i]
//     }
   
// }



// console.log(fusion(obj3, obj4))

const fusion = (first, second) => {
    if (Array.isArray(first) && Array.isArray(second)) {
        return first.concat(second);
    }

    if (typeof first === "string" && typeof second === "string") {
        return first + " " + second;
    }

    if (typeof first === "number" && typeof second === "number") {
        return first + second;
    }

    if (first === undefined) {
        return second;
    }

    if (second === undefined) {
        return first;
    }

    if (typeof first != typeof second) {
        return second;
    }

    if (first instanceof RegExp && second instanceof RegExp) {
        return second;
    }

    if (first instanceof Set && second instanceof Set) {
        return second;
    }

    let res = {};

    let keys = Object.keys(first).concat(Object.keys(second));
    keys.filter((key, i) => keys.indexOf(key) === i);

    keys.forEach((key) => {
        res[key] = fusion(first[key], second[key]);
    });

    return res;
};