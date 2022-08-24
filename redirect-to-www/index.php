<?php
if ($_SERVER["REQUEST_URI"] == "/") {
    header("Location: https://www.mitsunee.com", true, 301);
    exit;
}
header("Location: https://www.mitsunee.com".$_SERVER["REQUEST_URI"]);
exit;
?>
