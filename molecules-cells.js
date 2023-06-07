
//args = "TAGC"


function DNA(args) {
    if (typeof args == "string"){
        let res =  "";
        for(let i=0; i < args.length; i++){
            if(args[i] == "G") {
                res = res + "C"
            }
            if(args[i] == "C") {
                res = res + "G"
            }
            if(args[i] == "A") {
                res = res + "T"
            }
            if(args[i] == "U") {
                res = res + "A"
            }
        }
    return res
}
}

function RNA(args) {
    if (typeof args == "string"){
        let res =  "";
        for(let i=0; i < args.length; i++){
            if(args[i] == "C") {
                res = res + "G"
            }
            if(args[i] == "G") {
                res = res + "C"
            }
            if(args[i] == "T") {
                res = res + "A"
            }
            if(args[i] == "A") {
                res = res + "U"
            }
        }
    return res
}
}

//console.log(RNA(args))