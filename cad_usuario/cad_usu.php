<?php
	include "../includes/php/conexao.php";

	$usuario = $_POST['usuario'];
	$senha = $_POST['senha'];
	$email = $_POST['email'];

	$query = pg_query($bdcon3, "SELECT usu_login FROM usuarios WHERE usu_login='$usuario'");
	if(pg_fetch_array($query)) {
		echo 0;
		exit;
	}

	$query = pg_query($bdcon3, "SELECT usu_email FROM usuarios WHERE usu_email='$email'");
	if(pg_fetch_array($query)) {
		echo -1;
		exit;
	}

	$senha = password_hash($senha, PASSWORD_DEFAULT);
	pg_query($bdcon3, "INSERT INTO usuarios (usu_id, usu_login, usu_email, usu_senha, usu_tipo) VALUES (nextval('usu_seq'), '$usuario', '$email', '$senha', 0)");

	echo true;
	exit;
?>