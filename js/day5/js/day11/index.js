// const rectangle = {
//     length: 10,
//     width: 5,
//     area: function() {
//       return this.length * this.width;
//     },
//     perimeter: function() {
//       return 2 * (this.length + this.width);
//     }
//   };
  
//   console.log(rectangle.area()); 
//   console.log(rectangle.perimeter()); 

// var e_commerce = {
//     products: ["earphone", "headphone", "earpods"],
//     quantity: [4, 3, 2],
//     price: [700, 800, 1000],
//     total_price: function() {
//         var totalPrice = 0;
//         for (var i = 0; i < this.products.length; i++) {
//             totalPrice += this.quantity[i] * this.price[i];
//         }
//         return totalPrice;
//     }
// };

// console.log("Total price for all products: $" + e_commerce.total_price());


var amazon = [
  { name: "Speakers", price: 5400, rating: 4 },
  { name: "headphones", price: 3000, rating: 3 },
  { name: "playstation", price: 20000, rating: 5 }
];
for(let Product of amazon){
console.log("name:",Product.name, "ratings:", Product.rating)
}
let total = 0
for(product of amazon){
  total += product.rating
}
console.log("total average of all products :", total/amazon.length);
 
var minPrice
var minPriceProduct
for(let product of amazon){
  if(minPrice == undefined || minPrice > product.price){
    minPrice = product.price
    minPriceProduct = product.name
  }
}
console.log("Product with Minimum price:",minPriceProduct)