<?php
    $link=mysqli_connect("localhost:3306","root","")
    or die("Cannot connect to the database");
    mysqli_select_db($link,"qlncd")
    or die("Cannot connect to the database");
    mysqli_query($link,"SET NAMES 'UTF8'");
?>