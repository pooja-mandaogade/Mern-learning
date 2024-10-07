// console.log(1)
// console.log(2)
// console.log(3)

// setInterval(function(){
//     console.log(4)
    
// },2000)

// console.log(5)
// var num = 10
// document.getElementById("counter").innerText = num

// var id = setInterval(function(){
//     num--
//     if(num<=0){
//         clearInterval(id)
//     }
//     document.getElementById("counter").innerText = num
// },1000)

// console.log("interval id : ", id )


setTimeout(function(a){
    console.log(a)
},1000,"Sanket")


let arr =[{
    img: "https://th.bing.com/th/id/R.8c7bd339217bf76e0087add6ee6a33c5?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0"
},{
    img: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg"
},{
    img: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg"
}]
let a = 0
setInterval(function(){
    document.getElementById('img').setAttribute('src',arr[a].img)
    a++
    if(a>=arr.length){
        a=0
    }
},3000)