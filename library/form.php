<?php

function e(string $str,string $charset = 'UTF-8'):string{
    return htmlspecialchars($str,ENT_QUOTES | ENT_HTML5,$charset);
  }

if(isset($_POST['submit'])){

    $name  = e($_POST['name'],ENT_QUOTES | ENT_HTML5);
    $email = e($_POST['email'],ENT_QUOTES | ENT_HTML5);
    $body = e($_POST['body'],ENT_QUOTES | ENT_HTML5);
    }
    
$body = htmlspecialchars($_POST['body'],ENT_QUOTES | ENT_HTML5);

$errors = [];

if(trim($name) === ' ' || trim($name) === " "){
    $errors['name'] = "名前を入力してください";
}

if(trim($email) === ' ' || trim($email) === " "){
    $errors['email'] = "メールアドレスを入力してください";
}

if(trim($body) === ' ' || trim($body) === " "){
    $errors['body'] = "内容を入力してください";
}

if(count($errors) === 0){
    echo "完了";
} else {
    echo $errors['name'];
    echo $errors['email'];
    echo $errors['body'];
}


?>