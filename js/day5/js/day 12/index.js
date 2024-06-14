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

