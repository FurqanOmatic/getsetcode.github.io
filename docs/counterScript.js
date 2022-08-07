let count = 0
let counter = document.getElementById("counter");
let saveInput = document.getElementById("saveInput");
const increm = () =>{
    count += 1
    counter.innerHTML = count
}
const decrem = () =>{
    count -= 1
    counter.innerHTML = count
}
const saving = () =>{
    saveInput.innerHTML += count + " | "
   
}
const reset = () =>{
    count = 0
    counter.innerHTML = count
}
