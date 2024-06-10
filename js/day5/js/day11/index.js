var e_commerce = {
  products : ["earphone","headphone","earpods"],
  quantity : [4,3,2],
  price : [700, 800, 1000],
  
  total_price : function(){
      var total = 0
      for(let i=0;i<3;i++){
          total += e_commerce.price[i] * e_commerce.quantity[i]
      }
      return total
  }
};

console.log(e_commerce.total_price())

var rectangle = {
  length : 13,
  width : 10,
  area : function(){
      return rectangle.length * rectangle.width
  },
  perimeter : function (){
      return 2*(rectangle.length + rectangle.width)
  }
}

console.log(rectangle.area(), rectangle.perimeter())

// Question 4

var amazon = [
  {name:"Speakers", price:5400, rating:4},
  {name:"headphones", price:3000, rating:3},
  {name:"playstation",price:20000, rating:5}
];

for(let product of amazon){
  console.log("Name :",product.name, "Rating :", product.rating)
}
let total = 0
for(let product of amazon){
  total += product.rating
}

console.log("Average rating of products is : ", total/amazon.length)


var minPrice 
var minPriceProduct

for(let product of amazon){
  if(minPrice == undefined || minPrice > product.price){
      minPrice = product.price
      minPriceProduct = product.name
  }
}

console.log("Product with minimum price is : ", minPriceProduct)

var obj = {
  data : [
    {name:'Rice',quantity:2,price:60},
    {name:'Dal',quantity:3,price:50},
    {name:'Salt',quantity:1,price:20}
  ],
  total : function(){
    var total1 = 0
    for(var i=0;i<3;i++){
      total1 += obj.data[i].quantity * obj.data[i].price
    }
    console.log('total ; ' + total1)
  }
}
obj.total()