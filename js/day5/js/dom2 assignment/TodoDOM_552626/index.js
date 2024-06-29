var form = document.querySelector('form')
var task = document.getElementById('task')
var priority = document.getElementById('priority')


var tbody = document.querySelector('tbody')


form.addEventListener('submit',function(e){
    e.preventDefault()
    let obj = {
        task : task.value,
        priority : priority.value
    }
    
    let arr = JSON.parse(localStorage.getItem('task'))
    
    if(arr == null)
        arr = []
    
    arr.push(obj)
    localStorage.setItem('task',JSON.stringify(arr))

    // localStorage.setItem('task',JSON.stringify(arr))
    // var td1 = document.createElement('td')
    // var td2 = document.createElement('td')
    // var td3 = document.createElement('td')

    // td1.innerText = task.value 
    // td2.innerText = priority.value

    // if(priority.value == 'High')
    //     td2.style.backgroundColor = 'red'
    // else if(priority.value == 'Low')
    //     td2.style.backgroundColor = 'green'


    // var tr = document.createElement('tr')

    // tr.append(td1,td2,td3)

    // tbody.append(tr)


})
 