window.addEventListener('DOMContentLoaded', function start() {

const MAX_NUMBER = 10;

// あとで変える↓

let num1 = 2;
let num2 = 3;
let num3 = 5;
let title1 = "1等"
let title2 = "2等"
let title3 = "ハズレ"

// あとで変える↑

let main = document.getElementById('main');
let button = document.getElementById('button');
let history = document.getElementById('history');
let historyArray = [];
let targetNumber = [];

let effect = document.getElementById('effect');
let result = document.getElementById('result');
const buttonClose = document.getElementById('modalClose');
      

for(let i = 1; i <= MAX_NUMBER; i++){
  targetNumber.push(i);
}

let timerId;

button.onclick = () => {


    result.style.display = 'block';
    

    effect.style.display = 'block';
 

  if(targetNumber.length === 0){
    alert('すべての番号の発表が終わりました') ;
    clearInterval(timerId);
    return;
  }
  
      let targetIndex = Math.floor(Math.random() * targetNumber.length) ;  
      textContent = targetNumber[targetIndex];

    clearInterval(timerId); 

    targetNumber.splice(targetIndex, 1);
    // historyArray.push(main.textContent);
    // history.textContent = historyArray;

        if (textContent < (MAX_NUMBER+1)) msg = title1+'<br><img src="/app/image/campaign/dks/2305/230500_lamdash/camera.png" class="resize" style="width:500px; height:500px;">';
        if (textContent < (10-num1+1)) msg = title2+'<br><img src="/app/image/campaign/dks/2305/230500_lamdash/soda.png" class="resize" style="width:500px; height:500px;">';
        if (textContent < (10-num1-num2+1)) msg = title3;

        // function result(){

        history.innerHTML = msg;
        // }
        // timerId = setTimeout(result,3000);

        // 後で消す↓
        console.log(textContent);
        console.log(msg);
        // console.log(10-num1);
        // console.log(10-num1-num2);
        // console.log(MAX_NUMBER);



  }


});


// バツ印がクリックされた時
window.addEventListener('DOMContentLoaded', function() {
  const buttonClose = document.getElementById('modalClose');

    buttonClose.addEventListener('click', modalClose);
    function modalClose() {
      result.style.display = 'none';
    }
  });