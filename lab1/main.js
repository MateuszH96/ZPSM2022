const Calc = require('./Calc')
const _ = require('../lib/lodash')

const arrCorrect = [1, 2, 3, 4, 5]
const arrIncorrect = [1, 2, 's', 4, 5]
const correctType = 'number'

//zadanie3
function isArrayOfNum(arg){
    let i =0
    for(const el of arg){
        if(typeof(el) !== correctType){
            console.log("Incorrect value at index: "+i)
            console.log("\ttype of index is "+typeof(el))
            console.log("\tvalue = "+ el)
            return false
        }
        i++
    }
    return true
}

//zadanie 1
function sum1(args){
    if(isArrayOfNum(args)){
        console.log(args.reduce((a,b) => a+b))
    }
}

//zadanie 2
function sum2(args){
    if(isArrayOfNum(args)){
        console.log(_.sum(args))
    }
}

sum1(arrCorrect)
sum2(arrIncorrect)

console.log("Create 1st object of class Calc")
const calc1 = new Calc(arrIncorrect)
console.log(calc1.sum())
console.log(calc1.substract())

console.log("Create 2nd object of class Calc")
const calc2 = new Calc(arrCorrect)
console.log(calc2.sum())
console.log(calc2.substract())