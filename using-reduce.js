

//var arr = [1, 2, 3, 4, 5, 6]

// function adder(arr) {
//     var res = 0
   
//     for(let i = 0;i<arr.length;i++){
//        res = res + arr[i]

//     }  
 
//     return res

// }
const adder = (array, n = 0) => array.reduce(((accumulator, currentValue) => accumulator + currentValue), n)

// function sumOrMul(arr) {
//     var res = 0
//     for(let i = 0;i<arr.length;i++){
//         if (arr[i]%2 == 0) {
//         res = res * arr[i] 
//         } else if (arr[i]%2 != 0) {
//             res = res + arr[i] 
//         }
//      }  
//      return res 

// }
const sumOrMul=(array,num=0)=>array.reduce(((a,b)=>{
    if (b%2===0){
        return a*b
    }else{
        return a+b
    }
    }), num)

const funcExec = (arrFunc,n=0) => arrFunc.reduce((a,b)=>b(a),n);

//console.log(sumOrMul(arr))