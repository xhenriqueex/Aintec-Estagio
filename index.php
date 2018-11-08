<!DOCTYPE html>
<?php
	require "./includes/php/verifica_login.php";
?>

<html>
<head>
	<meta charset="UTF-8">
	<link href='includes/css/icons.css' rel="stylesheet">
	<link href="includes/css/vuetify.min.css" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
	<script src="./includes/js/vue.js"></script>
	<script src="./includes/js/vuetify.js"></script>
	<script src='./includes/js/axios.min.js'></script>
	<script src="./includes/js/menu.js"></script>
</head>
<body>
	<div id="app">
		<v-app>
			<!-- essa tag gera o cabeçalho da pagina (olhe no arquivo includes/js/menu.js) -->
			<component
				:is="header()"
				menutitle="Pagina Inicial"
			>
			</component>
		</v-app>
	</div>

	<script src="index.js"></script>
</body>
</html>