<?php
	$switch = $_POST['switch'];
	switch($switch) {
		case 'unlog':
			unlog();
		break;

		default:
			echo false;
			exit;
	}

	function unlog() {
		session_start();
		unset ($_SESSION['login']);
		unset ($_SESSION['senha']);
		exit;
	}
?>