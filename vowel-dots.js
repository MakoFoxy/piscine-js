
// str = "hello"


const vowels = /(a|e|i|o|u)/gi
function vowelDots(str) {
    let res = str.replace(vowels, '$1.' )
    return res
}
// function vowelDots(vowels) {
//     let res = "" //e.o.
//     let res2 = "" //hello
//     let res3 = "" //h.e.l.l.o. .w.o.r.l.d.
//     for(let i = 0;i<vowels.length;i++){
//         if (vowels[i] == 'a' || vowels[i] == 'e' || vowels[i] == 'i' || vowels[i] == 'o' || vowels[i] == 'u' || vowels[i] == 'A' || vowels[i] == 'E' || vowels[i] == 'I' || vowels[i] == 'O' || vowels[i] == 'U') {
//             res = res + vowels[i] + '.' 
//         } 
//     }
//     for(let i = 0;i<vowels.length;i++){
//         res2 = res2 + vowels[i]
//     }

//     for(let i = 0;i<res2.length;i++){
//         if (res2[i] != 'a' || res2[i] != 'e' || res2[i] == 'i' || res2[i] != 'o' || res2[i] != 'u' || res2[i] != 'A' || res2[i] != 'E' || res2[i] != 'I' || res2[i] != 'O' || res2[i] != 'U' && res3[i] >= 'a' && res3[i] <= 'z') {
//             res3 = res3 + res2[i] + '.'             
//         }             
//     }

//     for(let i = 0;i<res3.length;i++){
//         if (res3[i] == '.') {
//             for(let i = 0;i<res3[i].length;i++){
//             if (res3[i] == 'a' || res3[i] == 'e' || res3[i] == 'i' || res3[i] == 'o' || res3[i] == 'u' || res3[i] == 'A' || res3[i] == 'E' || res3[i] == 'I' || res3[i] == 'O' || res3[i] == 'U') {
//                 //res3 = res3 + res3[i] + ''
//                 res3 = res3.replace(res2, '' )
//             }
//             }
//         }
        
//     }

//     return res3
// }

// console.log(vowelDots(str))