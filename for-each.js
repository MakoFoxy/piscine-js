
// function add(num) {
//   return  num +2
// }
// function mul(num) {
//   return  num *2
// }

const forEach = (arg, func) => {
    let res = []
    for (let i = 0; i < arg.length; i++) {
      res.push(func(arg[i], i, arg))
    }
    return res
  }

  // console.log((forEach([1,2],add)))