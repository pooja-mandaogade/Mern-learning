// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 mavar


var form = document.querySelector('form')
var name1 = document.getElementById('name')
var batch = document.getElementById('batch')
var dsa = document.getElementById('dsa')
var cs = document.getElementById('cs')

var tbody = document.querySelector('tbody')

form.addEventListener('submit',function(e){
    e.preventDefault()

    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    var td6 = document.createElement('td')
    var td7 = document.createElement('td')

    td1.innerText = name1.value
    td2.innerText = batch.value
    td3.innerText = dsa.value
    td4.innerText = cs.value
    td5.innerText = coding.value
    var per = (+dsa.value+ +cs.value+ +coding.value)/30*100
    td6.innerText = per

    if(per>50){
        td7.innerText = "Regular"
        td7.style.backgroundColor = "green"
    }else{
        td7.innerText = "Asnyc"

        td7.style.backgroundColor = "Red"

    }

    var tr = document.createElement('tr')
    tr.append(td1,td2,td3,td4,td5,td6,td7)

    tbody.append(tr)
})
