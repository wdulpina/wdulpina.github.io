$('#startChecking').click(function() {
	var accessToken = $('#access_token').val();
	$.ajax({
		url : 'https://graph.facebook.com/me/friends?fields=id, name, email&accessToken=' + accessToken ,
		method: 'GET',
		success : function(res) {
			console.log(res);
		}
	})
})