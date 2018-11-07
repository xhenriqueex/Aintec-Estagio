<?php 
	session_start();
	include "../includes/php/conexao.php";
	
  $login = $_POST['login'];
	$senha = $_POST['senha'];

	$query = pg_query($bdcon3, "SELECT * FROM usuarios WHERE usu_login='$login'");

	while($array = pg_fetch_array($query))
	{
		if(password_verify($senha, $array['usu_senha'])) {
			$_SESSION['login'] = $login;
			$_SESSION['senha'] = $senha;
			echo true;
			exit;
		}
	}

	echo false;
	exit;
		
?>

