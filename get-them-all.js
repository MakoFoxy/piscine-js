  export const getArchitects=() => {
    let allParas = []
    let allSpan = []
    let arr = []
        // id = document.getElementById("id");
        // allParas = people.getElementsByTagName("a");
        allSpan = Array.from(document.getElementsByTagName("span"));
        allParas = Array.from(document.getElementsByTagName("a"));
    //arr = allParas.concat(allSpan);
    arr.push(allParas,allSpan)
    return arr
}

export function getClassical(){
    let allClass = []
    let allNoClass= []
    let allarr = []
        allClass = Array.from(document.getElementsByClassName("classical"));
        allNoClass= Array.from(document.querySelectorAll('a:not(.classical)'));
    
    allarr.push(allClass,allNoClass)
    return allarr
}

export const getActive=() => {
    let allClassActive = []
    let allClassNonAct = []
    let allarrAn = []
        allClassActive = Array.from(document.getElementsByClassName("classical active"));
        allClassNonAct = Array.from(document.querySelectorAll('a.classical:not(.active)'));
    
    allarrAn.push(allClassActive,allClassNonAct)
    return allarrAn
}

export function getBonannoPisano(){
    let BP = ''
    let nonBP= []
    let arrBP = []
    BP = document.getElementById("BonannoPisano");
    nonBP = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'));
    
    arrBP.push(BP,nonBP)
    return arrBP
}
