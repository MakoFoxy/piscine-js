

// var str = "hello world"
// arr = []

function words(str) {
        str = str.split(" ");           
    return str
}

//str = "hello world"

function sentence(str) {
    str = str.join(' ');           
return str
}

function yell(str) {
    str = str.toUpperCase();         
return str
}

function whisper(str) {
    return "*"+str.toLowerCase()+"*";
}

function capitalize(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();       
    return str
}

//console.log(whisper(str))
