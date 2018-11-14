<!DOCTYPE html>
<?php
	require "../includes/php/verifica_login.php";
?>
<script>
	if(!window.login) {
		alert("Faça login para acessar essa página!");
		window.location.href = "/aintec/";
	}
</script>
<html>
<head>
	<meta charset="UTF-8">
	<link href='../includes/css/icons.css' rel="stylesheet">
	<link href="../includes/css/vuetify.min.css" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
	<script src="../includes/js/vue.js"></script>
	<script src="../includes/js/vuetify.js"></script>
	<script src='../includes/js/axios.min.js'></script>
	<script src="../includes/js/menu.js"></script>
</head>
<body>
	<div id="app">
		<v-app>
				<component
				is="header-logged"
				menutitle="Cadastro de pessoa jurídica"
			>
			</component>
			<v-form v-model="valid" ref="form">
					<v-container fluid>
						<!-- layout dos inputs -->
						<v-layout align-center justify-center column>

							<!-- input do nome -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Nome"
									v-model="pessoa.nome"
									:error-messages="validNome"
									required
								></v-text-field>
							</v-flex>

							<!-- input do cnpj -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="CNPJ"
									v-model="pessoa.cnpj"
									:error-messages="validCnpj"
									mask="##.###.###/####-##"
									required
								></v-text-field>
							</v-flex>

							<!-- input da rua -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Rua"
									v-model="endr.rua"
									:error-messages="validRua"
									required
								></v-text-field>
							</v-flex>

							<!-- input do numero -->
							<v-flex xs4 sm4 md4 lg2>
									<v-text-field
										label="Número"
										v-model="endr.numero"
										:error-messages='validNumero'
										required
									></v-text-field>
							</v-flex>

							<!-- input do complemento -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Complemento"
									v-model="endr.compl"
									:error-messages='validCompl'
									required
								></v-text-field>
							</v-flex>

							<!-- input do CEP -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="CEP"
									v-model="endr.cep"
									mask="##.###-###"
									:error-messages='validCep'
									required
								></v-text-field>
							</v-flex>

							<!-- input do cidade -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Cidade"
									v-model="endr.cidade"
									:error-messages='validCidade'
									required
								></v-text-field>
							</v-flex>

							<!-- input do estado -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Estado"
									v-model="endr.estado"
									:error-messages='validEstado'
									required
								></v-text-field>
							</v-flex>
						</v-layout>
				
						<!-- layout dos botões -->
						<v-layout>
							<v-flex>
								<v-btn color="success" @click="">Cadastrar</v-btn>
							</v-flex>
							<v-flex>
								<v-btn color="error" onclick='window.location.href = "../index.html";'>Voltar</v-btn>
							</v-flex>
							<v-flex>
								<v-btn color="error" @click='clean'>Limpar</v-btn>
							</v-flex>
						</v-layout>
					</v-container>
			</v-form>
		</v-app>
	</div>

	<script src="cad_pj.js"></script>
</body>
</html>