
//SetInterval takes a function and time in milliseconds

setInterval(
function currentDate(){
    // const clock=document.getElementById("clock")
    let hour=document.getElementById("hour")
    let minute=document.getElementById("minute")
    let second=document.getElementById("second")
    const current=new Date();

    let hours=current.getHours()
    let minutes=current.getMinutes()
    let seconds=current.getSeconds()
    
    hours=hours<10?'0'+hours:hours
    minutes=minutes<10?'0'+minutes:minutes
    seconds=seconds<10?'0'+seconds:seconds

    hour.innerText=`${hours}`
    minute.innerText=`${minutes}`
    second.innerText=`${seconds}`


    // clock.innerText=`${hours}:${minutes}:${seconds}`
},1000)