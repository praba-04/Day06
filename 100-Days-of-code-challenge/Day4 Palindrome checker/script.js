const txtinput = document.querySelector(".inputs input");
checkbtn = document.querySelector(".inputs button");
infotext = document.querySelector(".info-txt");
let filterinput;

checkbtn.addEventListener("click", () => {
    //splitting user input character,reversing them,
    //and joining thme in a single word 
    let reverseinput = filterinput.split("").reverse().join("");
    infotext.style.display = "block";
    if(filterinput != reverseinput){
        return infotext.innerHTML = `No, <span>'${txtinput.value}'</span> isn't a Palindrome!`;
    }
    infotext.innerHTML = `yes, <span>'${txtinput.value}'</span> is a Palindrome!`;
});

txtinput.addEventListener("keyup",()=>{
    //removing spaces and all special character from input
     filterinput = txtinput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    if(filterinput){
        return checkbtn.classList.add("active");
    }
    infotext.style.display = "none";
        checkbtn.classList.remove("active");
});