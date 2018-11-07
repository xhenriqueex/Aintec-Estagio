var a = new Vue({
	el: "#app",

	data: {
		valid: false,
		email: "",
		usuario: "",
		senha: "",
		conf_senha: "",

		rules: {
			required: value => !!value || "Campo obrigatório",
			email: value => {
				let i = 0;

				while(i < value.length) {
					if(value[i] === '@') {
						return true;
					}
					i++;
				}

				return "E-mail invalido!"
			}
		}
	},

	computed: {
		validUsu: function() {
			if(this.usuario.length === 0) {
				this.valid = false;
				return "Campo obrigatório";
			}
		},

		validEmail: function() {
			if(this.email.length === 0) {
				this.valid = false;
				return "Campo obrigatório";
			}

			let i = 0;
			while(i < this.email.length) {
				if(this.email[i] === '@') {
					return '';
				}
				i++;
			}

			return "E-mail invalido!";
		},

		validSenha: function() {
			if(this.senha.length < 8)
			{
				this.valid = false;
				return "Senha deve ter pelo menos 8 caracteres";
			}
			
			if(this.senha.length >= 20)
			{
				this.valid = false;
				return "Senha deve ter menos de 20 caracteres";
			}

			let i = 0, intChar;
			while(i < this.senha.length)
			{
				intChar = this.senha.charCodeAt(i);
				
				if((intChar >= 65 && intChar <= 90) || (intChar >= 48 && intChar <= 57))
				{
					this.valid = true;
					return '';
				}

				i++;
			}
		},

		validConfSenha: function() {
			if(this.conf_senha.length === 0)
			{
				this.valid = false;
				return "Campo obrigatório!";
			}
			if(this.conf_senha === this.senha)
			{
				this.valid = true;
				return '';
			}
			else
			{
				this.valid = false;
				return "Os dois campos de senha estão diferentes!";
			}
		}
	},

	methods: {
		cadastrar: function() {
			if(!this.valid) {
				return;
			}
			let params = new URLSearchParams();
			params.append('usuario', this.usuario);
			params.append('email', this.email);
			params.append('senha', this.senha);

			axios.post("cad_usu.php", params)
			.then(response => {
				if(response.data === 1) {
					window.location.href = "../login/login.html";
				}
				else if(response.data === 0) {
					alert('Nome de Usuario já existente!');
				}
				else if(response.data === -1) {
					alert('Email já existente!');
				}
			})
			.catch(error => {
				alert(error);
			})
		}
	}
})