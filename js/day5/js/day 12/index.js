let num = [2,4,6,8,1,7]
num.forEach(function(elem){
    console.log(elem*elem)
})

let double = num.map(function(elem,index){
    return 2*elem
})
console.log(double)

let odd = num.filter(function(elem){
    return elem % 2 == 1
})
console.log(odd)

let sum = num.reduce(function(acc,elem,){
    return acc + elem 
})

let product = num.reduce(function(acc,elem){
    return acc * elem 
})
console.log(sum,product)
// [2,6,5,8]
// acc=2

let evenAddition = num.filter(function(elem){
    return elem % 2 == 0
}).map(function(elem){
    return elem * elem
}).reduce(function(acc,elem){
    return acc + elem
},0)

console.log(evenAddition)

let oddAddition = num.filter(function(elem){
    return elem % 1 == 0
}).map(function(elem){
return elem * elem
}).reduce(function( acc,elem){
    return acc + elem
},0) 
console.log(oddAddition)


// let users = [
//     {firstName:'Nayan', lastName:'Kale',place:'Banglore'},
//     {firstName:'Payal', lastName:'Yemde',place:'Banglore'},
//     {firstName:'Pooja', lastName:'Mandaogade',place:'Bengluru'},   
// ];
// let output = users.map(function(user){
//     return  user.firstName +' '+ user.lastName
// })
// console.log(output)

let object = [
    {firstName:'Nayan', lastName:'Kale',place:'Banglore'},
    {firstName:'Payal', lastName:'Yemde',place:'Banglore'},
    {firstName:'Pooja', lastName:'Mandaogade',place:'Bengluru'}, 
];
let output = object.filter(function(object){
    return object.place == 'Banglore'
}).map(function(object){
 rteurn 
})
console.log(output)



