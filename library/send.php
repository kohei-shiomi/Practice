<?php
session_start();
if($_SESSION['token'] === $_POST['token']){
    echo "完了";
        $name  = $_SESSION['name'];
        $email = str_replace(array("\r","\n"),'',$_SESSION['email']);
        $body  = $_SESSION['body'];
    }else{
        // 直接send.phpにアクセスしようとしたら強制的にリダイレクト
        header("Location: index.html");
        }
    
