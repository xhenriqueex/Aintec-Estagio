var a = new Vue({
    el: '#app',

    data: {
        valid: false,
        id: -1,
        str: "",
        nome: "",
        rg: "",
        dataExp: "",
        orgExp: "",
        cpf: "",
        email: "",
        telefone: "",
        celular: "",
        rua: "",
        numero: "",
        complemento: "",
        cep: "",
        estado: "",
        cidade: "",
        verifNome: false,
        verifRG: false,
        verifDataExp: false,
        verifOrgExp: false,
        verifCPF: false,
    },

    computed: {
        validNome: function () {
            if (this.nome.length === 0) {
                this.valid = false;
                return "Campo obrigatório";
            }
            this.verifNome = true;    
        },
        validRG: function () {
            if (this.rg.length === 0) {
                this.valid = false;
                return "Campo obrigatório";
            }
            this.verifRG = true;
        },
        validDate: function () {
            if (this.dataExp.length === 0) {
                this.valid = false;
                return "Campo obrigatório";
            }
            this.verifDataExp = true;
        },
        validOrg: function () {
            if (this.orgExp.length === 0) {
                this.valid = false;
                return "Campo obrigatório";
            }
            this.verifOrgExp = true;
        },
        validCPF: function () {
            if (this.cpf.length === 0) {
                this.valid = false;
                return "Campo obrigatório";
            }
            this.verifCPF = true;
        },
        validEmail: function () {
			let i = 0;
			while (i < this.email.length) {
				if(this.email[i] === '@') {
					return '';
				}
				i++;
			}
			return "E-mail invalido!";
        },
        validFone: function () {
            
        },
        validCel: function () {
            
        },
        validRua: function () {
            
        },
        validNum: function () {
            
        },
        validComp: function () {
            
        },
        validCEP: function () {
            
        },
        validEst: function () {
            
        },
        validCid: function () {

        },
        verify: function () {
            if (this.verifCPF && this.verifDataExp && this.verifNome && this.verifOrgExp && this.verifRG)
            {
                return false;
            }
            return true;
        }

    },

    methods: {
        salvar: function() {
            var params = new URLSearchParams();
            params.append('nome', this.nome);
            params.append('rg', this.rg);
            params.append('dataExp', this.dataExp);
            params.append('orgExp', this.orgExp);
            params.append('cpf', this.cpf);
            params.append('email', this.email);
            params.append('telefone', this.telefone);
            params.append('celular', this.celular);
            params.append('rua', this.rua);
            params.append('numero', this.numero);
            params.append('complemento', this.complemento);
            params.append('cep', this.cep);
            params.append('estado', this.estado);
            params.append('cidade', this.cidade);

            if(id == -1)
            {
                params.append('switch', "criar");
                axios.post("save_pf.php", params)
                .then(response => {

                })
                .catch(error => {
                    console.log(error);
                });
            }
            else
            {
                axios.post();
            }
        },

        erase: function () {
            this.nome = "";
            this.rg = "";
            this.dataExp = "";
            this.orgExp = "";
            this.cpf = "";
            this.email = "";
            this.telefone = "";
            this.celular = "";
            this.rua = "";
            this.numero = "";
            this.complemento = "";
            this.cep = "";
            this.estado = "";
            this.cidade = "";
        }
    }
})