<?php
include "sql.php";

if(!isset($_GET["name"]) || !isset($_GET["type"])) {
    return;
}

$name = $_GET["name"];
$type = $_GET["type"];
$success = False;

if($type == "button") {
    $ip = "unknown ip addr.";
    $value = "false";


    $q = "insert into commands(issuer, targetObj, valueBool) VALUES ('$ip', '$name', $value)";
    $pizza -> query($q);
    $success = True;
}
echo $success;
?>