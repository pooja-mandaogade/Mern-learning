var task = document.getElementById('task')
var priority = document.querySelector('#priority')
var form = document.querySelector('form')

var tbody = document.querySelector('tbody')

form.addEventListener('submit',function(e){
    e.preventDefault()

    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')

    td1.innerText = task.value
    td2.innerText = priority.value
    console.log(task.value)


    if(priority.value == 'High')
         td2.style.backgroundColor = 'red'
    else if(priority.value == 'Low')
        td2.style.background = 'green'



    var tr = document.createElement('tr')

    tr.append(td1,td2,td3)

    tbody.append(tr)


})