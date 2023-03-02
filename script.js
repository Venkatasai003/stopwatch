//access the elements
//access the display tymer using dom
let Display=document.querySelector('.DisplayTimer')

//initialize the value to zero
let[hours,minuits,seconds,milliseconds]=[0,0,0,0]

let int=null
//start

//let start=document.getElementById('startBtn')//
                //(or)
document.getElementById('startBtn').addEventListener('click',()=>{
    if(int!=null){
        clearInterval(int)
    }
    int=setInterval(DisplayTimer,10)
})


//stop

document.getElementById('stopBtn').addEventListener('click',()=>{
  clearInterval(int)
    
})

//reset

document.getElementById('resetBtn').addEventListener('click',()=>{
  clearInterval(int)
 hours=milliseconds=minuits=seconds=0;
 Display.innerHTML=`00:00:00:00`;
})

//display timer function
function DisplayTimer(){
    milliseconds++
    if(milliseconds===1000){
        milliseconds=0
        seconds++
        if(seconds===60){
            seconds=0
            minuits++
            if(minuits===60){
                minuits=0
                hours++
            }
        }
    }
    let h=hours<10? '0'+hours:hours
    let m=minuits<10? '0'+minuits:minuits
    let s=seconds<10? '0'+seconds:seconds
    let ms=milliseconds<10? '00'+milliseconds:milliseconds <100? '0' +milliseconds:milliseconds
    Display.innerHTML=`${h}:${m}:${s}:${ms}`
}
