//var str = ['honda', 'mazdadassa', 'toyotadsadadsa','bmw']
function filterShortStateName(arr) {
    return arr.filter(word => word.length < 7);
}


const filterStartVowel = array => array.filter(element => /^[aeiou]/i.test(element))


const filter5Vowels = array => array.filter(word => word.match(/[aeiouAEIOU]/g).length >= 5)

const filter1DistinctVowel = array => array.filter(word => {
    let arr = word.match(/[aeiouAEIOU]/g)// only cities with vowels
    return arr.every(v => v.toLowerCase() === arr[0].toLowerCase())//make sure all vowels are equial and compare values
})

const multiFilter = array => array.filter(obj => (
    obj.capital.length > 7 &&
    filterStartVowel([obj.name]).length == 0 &&
    (/[aeiouAEIOU]/g).test(obj.tag) == true &&
    obj.region != 'South'
)
)
//console.log(filterShortStateName(str))