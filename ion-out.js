
//var str = "animation"
function ionOut(str) {
    let reg = /(?<=t)ion/g
    let res = []
    for (let value of str.split(" ")) {
        if (value.search(reg) !== -1) {
            res.push(value.replace(reg,"").replace(/\W/,""))
        }
    }

    return res
}
function ionOut(str) {
    var arr = []
    var arr2 = []
    var res = ""
    if (typeof (str) === "string") {
        for(let i = 0;i<str[i].length;i++){
            arr = str.split('');     
        }
        for(let i = arr.length-1;i>= 0;i--){
            if (arr[i] != 't' && arr[i] != 'i' && arr[i] != 'o' && arr[i] != 'n') {
                arr2.push(arr[i])
            }
        }
        
    }
return arr2
}

// const vowels = /(a|e|i|o|u)/gi
// function vowelDots(str) {
//     let res = str.replace(vowels, '$1.' )
//     return res
// }

//console.log(ionOut(str))