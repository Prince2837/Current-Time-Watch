
let clock = document.getElementById("clock")
let currTime  = () => {
    let Time = new Date().toLocaleTimeString();
    clock.innerText = Time ;
}
currTime();

setInterval(() =>{
currTime();
},1000)