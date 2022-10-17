const _ = require('lodash')

function find_max(arr){
    return _.max(arr)
}

function find_min(arr){
    return _.min(arr)
}

console.log(find_max([1,2,3,4,5]))
console.log(find_min([1,2,3,4,5]))


a=_.mean([1,2,3,4])
console.log(a)