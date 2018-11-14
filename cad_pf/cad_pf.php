<?php
	require "../includes/php/verifica_login.php";
?>
<script>
	if(!window.login) {
		alert("Faça login para acessar essa página!");
		window.location.href = "/aintec/";
	}
</script>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Pessoa física</title>
	<link href='../includes/css/icons.css' rel="stylesheet">
	<link href="../includes/css/vuetify.min.css" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
	<script src="../includes/js/vue.js"></script>
	<script src="../includes/js/vuetify.js"></script>
	<script src='../includes/js/axios.min.js'></script>
	<script src='../includes/js/menu.js'></script>
	<script src="../includes/js/functions.js"></script>
</head>
<body>
	<div id="app">
		<v-app>
			<component
				is="header-logged"
				menutitle="Cadastro de pessoa física"
			>
			</component>
			<v-form v-model="valid" ref="form">
					<v-container fluid>
						<!-- layout dos inputs -->
						<v-layout align-center justify-center column>

							<!-- input do nome a ser cadastrado -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Nome"
									type="v-text-field"
									v-model="nome"
									:error-messages="validNome"
									required
								></v-text-field>
                            </v-flex>
                            
                            <!-- input do rg a ser cadastrado -->
                            <v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="RG"
									v-model="rg"
									mask="##.###.###-#"
									:error-messages="validRG"
									required
								></v-text-field>
                            </v-flex>
                            
                            <!-- input da data de expedição do rg -->
                            <v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Data de expedição"
									v-model="dataExp"
									mask="##/##/####"
									:error-messages="validDate"
									required
								></v-text-field>
							</v-flex>

							<!-- input do órgao de expedição do rg -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Órgão expeditor"
									v-model="orgExp"
									:error-messages='validOrg'
									required
								></v-text-field>
							</v-flex>

							<!-- input do cpf a ser cadastrado -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="CPF"
									v-model="cpf"
									mask="###.###.###-##"
									:error-messages="validCPF"
									required
								></v-text-field>
                            </v-flex>
                            
                            <!-- input do e-mail a ser cadastrado -->
                            <v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Email"
									v-model="email"
									:error-messages="validEmail"
									required
								></v-text-field>
                            </v-flex>
                            
							<!-- input do telefone a ser cadastrado -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Telefone"
									v-model="telefone"
									mask="(+##) ## ####-####"
									:error-messages="validFone"
									required
								></v-text-field>
							</v-flex>

							<!-- input do celular a ser cadastrado -->
							<v-flex xs4 sm4 md4 lg2>
									<v-text-field
										label="Celular"
										v-model="celular"
										mask="(+##) ## #####-####" 
										:error-messages='validCel'
										required
									></v-text-field>
							</v-flex>

							<!-- input da rua da moradia -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Rua"
									v-model="rua"
									:error-messages='validRua'
									required
								></v-text-field>
							</v-flex>

							<!-- input do número da moradia -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Numero"
									v-model="numero"
									:error-messages='validNum'
									required
								></v-text-field>
							</v-flex>

							<!-- input do complemento da moradia -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Complemento"
									v-model="complemento"
									:error-messages='validComp'
									required
								></v-text-field>
							</v-flex>

							<!-- input do cep da moradia -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="CEP"
									v-model="cep"
									mask="#####-###"
									:error-messages='validCEP'
									required
								></v-text-field>
							</v-flex>

							<!-- input do estado da moradia -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Estado"
									v-model="estado"
									:error-messages='validEst'
									required
								></v-text-field>
							</v-flex>

							<!-- input da cidade da moradia -->
							<v-flex xs4 sm4 md4 lg2>
								<v-text-field
									label="Cidade"
									v-model="cidade"
									:error-messages='validCid'
									required
								></v-text-field>
							</v-flex>
                            
                        </v-layout>
				
						<!-- layout dos botões -->
						<v-layout>
							<v-flex>
								<v-btn :disabled="verify" color="success" @click="salvar()">Cadastrar</v-btn>
							</v-flex>
							<v-flex>
								<v-btn color="success" @click="erase()">Limpar</v-btn>
							</v-flex>
							<v-flex>
								<v-btn color="error" onclick='window.location.replace("../index.php");'>Voltar</v-btn>
							</v-flex>
						</v-layout>
					</v-container>
			</v-form>
		</v-app>
	</div>

	<script src="cad_pf.js"></script>
</body>
</html>