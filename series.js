
// function func() {
//     c =a +b
// }

// f = [func]

async function series(farr) { 
    if (farr.length === 0) return []
    let res =[]
    for (let i= 0; i < farr.length; i++) {
        res.push(await farr[i]())
    }
    return res
}