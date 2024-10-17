<?php
/*

!!!! -> thi sis only for buttons!!!
 other inputs should be handled by a different script like
 slider.php
 color.php
 etc!!


*/
include "sql.php";

if(!isset($_GET["value"]) || !isset($_GET["type"]) || !isset($_GET["action"])) {
    return;
}

$value = $_GET["value"];
$type = $_GET["type"];
$action = $_GET["action"];
$success = False;

if($type == "button") {
    $ip = "unknown ip addr.";

    $q = "insert into commands(issuer, valueStr, action) VALUES ('$ip', '$value', '$action')";
    $pizza -> query($q);
    $success = True;
}
echo $success;
?>