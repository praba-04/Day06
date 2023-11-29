document.getElementById("pay").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("back-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
});