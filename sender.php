<?php
    $name = $_POST['name'];
    $surname = $_POST['lastname'];
	$phone = $_POST['Mail'];
    $email = $_POST['number'];

	$to = "team@bodo.delivery";
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Фамилия: $surname /n
    Телефон: $phone /n
    Почта: $email";
	mail($to, $subject, $msg, "From: $from ");
?>

<p>Привет, форма отправлена</p>
