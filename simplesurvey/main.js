
 
function answerCount1(){
    n++;
    counter1.innerHTML = n;
}

window.addEventListener("load", ()=>{
    
    counter1 = document.getElementById("counter1");
    btnAnswer1 = document.getElementById("btnAnswer1");
    n = 0;
 
    btnAnswer1.addEventListener("click", answerCount1);
    
});

function answerCount2(){
    o++;
    counter2.innerHTML = o;
}

window.addEventListener("load", ()=>{
    
    counter2 = document.getElementById("counter2");
    btnAnswer2 = document.getElementById("btnAnswer2");
    o = 0;
 
    btnAnswer2.addEventListener("click", answerCount2);
    
});

function answerCount3(){
    p++;
    counter3.innerHTML = p;
}

window.addEventListener("load", ()=>{
    
    counter3 = document.getElementById("counter3");
    btnAnswer3 = document.getElementById("btnAnswer3");
    p = 0;
 
    btnAnswer3.addEventListener("click", answerCount3);
    
});

function answerCount4(){
    q++;
    counter4.innerHTML = q;
}

window.addEventListener("load", ()=>{
    
    counter4 = document.getElementById("counter4");
    btnAnswer4 = document.getElementById("btnAnswer4");
    q = 0;
 
    btnAnswer4.addEventListener("click", answerCount4);
    
});

function answerCount5(){
    r++;
    counter5.innerHTML = r;
}

window.addEventListener("load", ()=>{
    
    counter5 = document.getElementById("counter5");
    btnAnswer5 = document.getElementById("btnAnswer5");
    r = 0;
 
    btnAnswer5.addEventListener("click", answerCount5);
    
});

function clickBtn1(){
    let counter = document.getElementsByClassName("counter");
    for(let i = 0; i < counter.length; i++){

    if (counter[i].style.visibility == "hidden") {
      counter[i].style.visibility = "visible";
    } else {
      counter[i].style.visibility = "hidden";
    }
 }}






