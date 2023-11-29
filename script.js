let copytext = document.querySelector(".copy-txt");
copytext.querySelector("button").addEventListener("click",function(){
    let input = copytext.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copytext.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        copytext.classList.remove("active");

    }, 2500);
})