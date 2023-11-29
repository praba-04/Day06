const textbox = document.querySelector(".wrapper input");
        btn = document.querySelector("#check-btn");
        vowelcountshow = document.querySelector("#vowel-count");
        vowelcountshow.innerHTML = 0;

btn.addEventListener("click", () => {
    if(textbox.value==""){
        alert("please enter the text");
    }
    else{
        let values = textbox.value;
        countvowels(values);
    }
 });
 function countvowels(str){
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let count=0;
    for(let char of str){
        if (vowels.includes(char)){
            count++;
        }
    }
    vowelcountshow.innerHTML = count;

 }
