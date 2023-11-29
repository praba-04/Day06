const maintitle = document.querySelector("#title");
let curvalue=0;

const btndecrement = document.querySelector("#Decrement");
const btnincrement = document.querySelector("#Increment");
const btnreset = document.querySelector("#Reset");


btnincrement.addEventListener('click',() =>{
    curvalue++;
    maintitle.textContent = curvalue;
});

btndecrement.addEventListener('click',() =>{
    curvalue--;
    maintitle.textContent = curvalue;
});

btnreset.addEventListener('click',() =>{
    curvalue=0;
    maintitle.textContent = curvalue;
});
