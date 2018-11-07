<?php 
	// se estiver logado retorna true, se nao, retorna false
	session_start();

	// retorna true se estiver logado, false caso contrario
	if(isset($_SESSION['login'])  && isset($_SESSION['senha']))
	{
		echo true;
		exit;
	}

	echo false;
	exit;
?>
