

// args = "'ant', 'bison', 'camel', 'duck', 'elephant'";

// index =0


function slice(args, index, end=args.length) {
    if(index < 0){
        index += args.length
    }
    if (index < -args.length){
        index = 0
    }
    if (end < 0){
        end += args.length
    }
    if (end >= args.length){
        end = args.length
    }
    if (end <= index){
        return
    }
    if (Array.isArray(args)) {
      var arr = []
        for (let i = index; i < end; i++) {         
             // arr = arr + args[i]   
             arr.push(args[i])
        }  
        return arr 
    } else if (typeof args == "string"){
    let res =  "";
    for(let i=index; i< end; i++){
        res = res + args[i]
    }
    return res
}   
}



// console.log(slice(args, index))