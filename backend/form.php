<?php

$data = $_POST['f_name']."|".$_POST['l_name']."|".$_POST['email']."|".$_POST['company']."|".$_POST['city']."|".$_POST['message']."\n";

$handle = fopen('./data.txt', 'a');
fwrite($handle, $data);
fclose($handle);
