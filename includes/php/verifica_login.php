<?php 
	// se estiver logado retorna true, se nao, retorna false
	$login;
	session_start();

	// retorna true se estiver logado, false caso contrario
	if(isset($_SESSION['login'])  && isset($_SESSION['senha']))
	{
		$login = "true";
	}
	else
	{
		$login = "false";
	}

	echo "
		<script>
			window.login = $login;
		</script>
	";
?>
