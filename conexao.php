<?php  
define('HOST','127.0.0.1');
define('USUARIO','root');
define('SENHA','password');
define('DB','login');

$conexao = mysqli_connect(HOST,USUARIO,SENHA,DB)  or die ('nao foi possivel conectar');
