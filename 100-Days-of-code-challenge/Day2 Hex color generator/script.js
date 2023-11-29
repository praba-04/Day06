const gen = document.getElementById("Generate");
const hexcode = document.getElementById("Hexcode");
const col = document.getElementById("color")
let hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

gen.addEventListener('click',changebg)
function changebg(){
    let hexcolor = '#'
    for(let i=1;i<=6;i++){
        hexcolor  +=  randomhexvalue()
    }
   col.style.backgroundColor = hexcolor
   hexcode.innerHTML = hexcolor
}
function randomhexvalue(){
    let randomindex = Math.floor(Math.random()*16)
    return hex[randomindex] 
}