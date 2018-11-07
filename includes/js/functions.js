function unlog() {
	var params = new URLSearchParams();
	params.append('switch', 'unlog');

	axios.post("../includes/functions.php", params)
	.then(response => {
		return response.data;
	})
	.catch(error => {
		alert(error);
	})
}