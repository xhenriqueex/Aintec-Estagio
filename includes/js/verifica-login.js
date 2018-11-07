var verif_login = new Vue({
	el: '#app',

	data: {
		str: ''
	},

	computed: {
		toolBox: function() {
			axios.post("./includes/php/verifica_login.php", null)
			.then(response => {
				this.str = (response.data ? 'tool-box-logged' : 'tool-box-unlogged');
			})
			.catch(error => {
				console.log(error);
			});

			return this.str;
		}
	},
})