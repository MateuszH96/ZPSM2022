const _ = require('lodash')

function find_max(arr){
    return _.max(arr)
}

function find_min(arr){
    return _.min(arr)
}

function viewInfo(toInfo){
    console.log(toInfo.name)
    console.log(toInfo.surname)
    toAverageU = 0
    toAverageD = 0
    for(const grades of toInfo.allGrades){
        toAverageU += _.mean(grades.grades) * grades.weight
        toAverageD += grades.weight
    }
    console.log(toAverageU/toAverageD)

}

console.log(find_max([1,2,3,4,5]))
console.log(find_min([1,2,3,4,5]))


a=_.mean([1,2,3,4])
console.log(a)



const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5,4,3,5,2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3,3.5,2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4,3,3.5],
            weight: 5
        }
    ]

}

viewInfo(user)