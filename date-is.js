

function isValid(date) {
    if(isNaN(date)|| date == 0){
        return false
    }else{
        return true
    }
}
function isAfter(date, date2) {
    if (date > date2) {
        return true
    }
    return false
}

function isBefore(date, date2) {
    if (date < date2) {
        return true
    }
    return false
}

function isFuture(date) {
    let date2 = new Date()
    if (date > date2) {
        return true
    }
    return false
}

function isPast(date) {
    if(!isValid(date)){
        return false
    }
    let date2 = new Date()
    if (date > date2) {
        return false
    } else {
    return true
    }
}