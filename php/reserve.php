<?php
require_once('connect.php')
$email = $_POST['email'];
$pass= $_POST['pass'];


$sql = "INSERT INTO 'reserve' (email,pass) VALUES ('$email','$pass')"

$conn -> query ($sql);
?>