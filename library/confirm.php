<?php
session_start();

ini_set("display_errors", 1);
error_reporting(E_ALL);

if(isset($_POST['submit'])){

    $name  = htmlspecialchars($_POST['name'],ENT_QUOTES | ENT_HTML5);
    $email = htmlspecialchars($_POST['email'],ENT_QUOTES | ENT_HTML5);
    $body  = htmlspecialchars($_POST['body'],ENT_QUOTES | ENT_HTML5);
    }

    $token = sha1(uniqid(mt_rand(),true));
    $_SESSION['token'] = $token;
    
// $errors = [];

// if(trim($name) === ' ' || trim($name) === " "){
//     $errors['name'] = "名前を入力してください";
// }

// if(trim($email) === ' ' || trim($email) === " "){
//     $errors['email'] = "メールアドレスを入力してください";
// }

// if(trim($body) === ' ' || trim($body) === " "){
//     $errors['body'] = "内容を入力してください";
// }

// if(count($errors) === 0){
//     $_SESSION['name'] = $name;
//     $_SESSION['email']= $email;
//     $_SESSION['body'] = $body;
// } else {
//     echo $errors['name'];
//     echo $errors['email'];
//     echo $errors['body'];
// }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div>
    <header>
        <div class="logo"><a href="index.html">library</a></div>
        <button class="btn-menu">
        </button>
        <nav>
            <ul class="menu">
                <li id="about" onclick="show(introduction)">about</li>
                <!-- マウスオーバーでしたかったけどスマホでの対応方法要調査
                onmouseover="show(introduction)" onmouseout="show(introduction)" -->
                <li class="contact"><a href="form.php">contact</a></li>
            </ul>
        </nav>
        <span id="introduction" class="introduction">2022年後半からweb制作の学習を始めた30代です。<br>ここでアウトプットしています。</span>
        
        <script>
            function show() {
                
            const element = document.getElementById("introduction");
            const about = document.getElementById("about");
            element.style.visibility = (element.style.visibility == 'visible')? "hidden": "visible";

            if (about.innerHTML === 'about') {
                about.innerHTML = 'close';
            } else {
                about.innerHTML = 'about';
            }
            }
        </script>

        <script>
            const btn = document.querySelector('.btn-menu');
            const menu = document.querySelector('.menu');

            btn.addEventListener('click', () => {
              menu.classList.toggle('open-menu'),
              btn.classList.toggle('close-btn-menu')
              
            });
        </script>
    </header>
  <h2 >お問い合わせ内容確認</h2>  
    <div class="confirm">
        <table>
            <tr>
                <th>お名前</th>
                <td><?php echo $name ;?></td>
            </tr>
            <tr>
                <th>メールアドレス</th>
                <td><?php echo $email ;?></td>
            </tr>
            <tr>
                <th>内容</th>
                <td><?php echo nl2br($body);?></td>
            </tr>
        </table>
        <br>
        <p> こちらの内容で送信してもよろしいですか？</p>
        <br>
        <form method="post" action="send.php">
            <input type="hidden" name="token" value="<?php echo $token ?>">
            <button type="submit" value="送信">送信</button>
            <a  href="form.php?action=edit">戻る</a>
        </form>
    </div>
</div>
</body>
</html>



