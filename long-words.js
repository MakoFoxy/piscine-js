function longWords(arr){
    let res = arr.every((value) => {
        return value.length > 5
    })
    return res
}
function oneLongWord(arr){
    let res = arr.some((value) => {
        return value.length >=10
    })
    return res
}
function noLongWords(arr){
    let res = arr.every((value) => {
        return value.length < 7
    })
    return res
}