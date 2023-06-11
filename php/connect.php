<?php
header("Access-Control-Allow-Origin: *");
  $db_host = 'localhost';
  $db_user = 'root';
  $db_password = 'root';
  $db_db = 'reserve';

$conn = mysqli_connect($db_host,$db_user,$db_password,$db_db);

if(!$conn){
    die("Connection failed".mysqli_connect_error());
}else{
    echo "Good";
}
?>