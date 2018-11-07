var a = new Vue({
	el: "#app",

	data: {
		str: '',
		valid: false,
		pessoa: {
			nome: '',
			cnpj: ''
		},
		endr: {
			rua: '',
			numero: '',
			compl: '',
			cep: '',
			cidade: '',
			estado: ''
		}
	},

	computed: {
		validNome: function(){

		},

		validCnpj: function(){

		},

		validRua: function(){

		},

		validNumero: function(){

		},

		validCompl: function(){

		},

		validCep: function(){

		},

		validCidade: function(){

		},

		validEstado: function(){

		},

		header: function() {
			axios.post("/aintec/includes/php/verifica_login.php", null)
			.then(response => {
				if(response.data) {
					this.str = 'header-logged';
				}
				else {
					window.location.href = "/aintec/";
				}
			})
			.catch(error => {
				console.log(error);
			});

			return this.str;
		}
	}
})