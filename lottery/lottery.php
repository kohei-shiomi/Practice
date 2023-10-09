

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
  <!-- <script src="./lot.js"></script> -->
<?php
 
?>



<h1>text</h1>

 <div class="" id="main">
   <!-- <div class="bluelight"></div> -->
   <!-- <div class="rectangle2"></div> -->
   <!-- <div class="rectangle3"></div> -->
   <!-- <div class="rectangle"></div> -->
   
   
   
 

 <button id="button" >スタート</button>
</div>
 
 <h2>text</h2>

 <div id="result">
   
   <div id="effect">
     <img src="/app/image/campaign/dks/2305/230500_lamdash/doraiya.png" class="resize dryer">
   </div>
   
   <div id="history"></div>
   <div class="closeBtn">
     <button id="modalClose">×</button>
   </div>
   
 </div>



<script>
    window.addEventListener('DOMContentLoaded', function start() {

let MAX_NUMBER = <? echo $_POST['maxNumber']; ?>;


// あとで変える↓

if(typeof <? $_POST['title'][0]; ?>; != 'undefined') {
  // 変数aが存在する時の処理
  let title1 = <? $_POST['title'][0]; ?>;
} else {
  // 変数aが存在しない場合の処理
  return;
}

if(typeof <? $_POST['title'][1]; ?>; != 'undefined') {
  // 変数aが存在する時の処理
  let title2 = <? $_POST['title'][1]; ?>;
} else {
  // 変数aが存在しない場合の処理
  return;
}

if(typeof <? $_POST['title'][2]; ?>; != 'undefined') {
  // 変数aが存在する時の処理
  let title3 = <? $_POST['title'][2]; ?>;
} else {
  // 変数aが存在しない場合の処理
  return;
}

let num1 = 2;
let num2 = 3;
let num3 = 5;
// let title1 = "1等"
// let title2 = "2等"
// let title3 = "ハズレ"

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

button.addEventListener('click', start)  => {


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
</script>

</head>
<body>
<?php
echo $_POST['maxNumber'];
echo $_POST['title'][0];
if (isset($_POST["title"])) {
    for ($i = 0; $i < count($_POST['title']); $i++) {
      echo $_POST['title'][$i] . PHP_EOL;
    }
  }
echo $_POST['prizeName'][0];
?>


</body>
</html>