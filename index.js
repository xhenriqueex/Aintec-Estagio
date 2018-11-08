let a = new Vue ({
	el: "#app",

	data: {
		str: ''
	},

	methods: {
		header: function() {
			if(window.login) {
				return 'header-logged';
			}
			else {
				return 'header-unlogged';
			}
		}
	}
})