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
		},
		verifNome: '',
		verifCnpj: ''
	},

	methods: {
		clean: function() {
			this.pessoa.nome = '';
			this.pessoa.cnpj = '';
			this.endr.rua =  '';
			this.endr.numero = '';
			this.endr.compl = '';
			this.endr.cep = '';
			this.endr.cidade = '';
			this.endr.estado = '';
		},
	},

	computed: {
		validNome: function(){
			if (this.nome.length === 0) {
                this.valid = false;
                return "Campo obrigatório";
            }
            this.verifNome = true;
		},

		validCnpj: function(){
			if (this.cnpj.length === 0) {
                this.valid = false;
                return "Campo obrigatório";
            }
            this.verifCnpj = true;
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
		verify: function () {
            if (this.verifCnpj && this.verifNome)
            {
                return false;
            }
            return true;
        }

		// header: function() {
		// 	axios.post("/aintec/includes/php/verifica_login.php", null)
		// 	.then(response => {
		// 		if(response.data) {
		// 			this.str = 'header-logged';
		// 		}
		// 		else {
		// 			window.location.href = "/aintec/";
		// 		}
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 	});

		// 	return this.str;
		// }
	}
})