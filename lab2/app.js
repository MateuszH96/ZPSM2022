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
    let toAverageU = 0
    let toAverageD = 0
    for(const grades of toInfo.allGrades){
        toAverageU += _.mean(grades.grades) * grades.weight
        toAverageD += grades.weight
    }
    console.log(toAverageU/toAverageD)

}

function findSubject(usr,weightValue){
    let result = _.find(usr.allGrades, function(obj){
        if(obj.weight === weightValue){
            return true
        }
    })
    console.log(result.subjectName)
}

function getMails(coll){
    let arr = []
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    for(const c of coll){
        if(typeof(c) === 'string' && reg.test(c)){
            arr.push(c)
        }
    }
    
    console.log(arr.sort())
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

const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
    ];

viewInfo(user)
findSubject(user,1)

getMails(collections)