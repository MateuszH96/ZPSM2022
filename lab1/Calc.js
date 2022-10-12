const _ = require('../lib/lodash')
//zadanie 4
module.exports = class Calc{
    constructor(arr){
        this.arr = _.filter(arr,function(i){
            if(typeof(i) === 'number'){
                return i
            }
        })
        console.log(this.arr)
    }
    sum() {
        return this.arr.reduce((a,b) => a+b)
    }
    substract() {
        return this.arr.reduce((a,b) => a-b)
    }
    showArr() {
        console.log(this.arr)
    }
}
