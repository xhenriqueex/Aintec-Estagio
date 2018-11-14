var a = new Vue({
    el: "#app",
    data: {
        usuario: "",
        senha: ""
    },

    methods: {
        verificaExiste: function () {
					var params = new URLSearchParams();
					params.append('login', this.usuario);
					params.append('senha', this.senha);

          axios.post("./login.php", params)
          .then(response => {
            if(response.data)
            {
            	window.location.href = "../index.php";
            }else
            {
              alert("Usuario ou senha inválido!");
            }
          })
          .catch(error => {
            alert(error);
          })
        }
    }
})