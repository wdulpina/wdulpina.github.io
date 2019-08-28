$('#startChecking').click(function() {
	var accessToken = $('#access_token').val();
	$.ajax({
		url : 'https://graph.facebook.com/me?fields=id, email, name&access_token=' + accessToken ,
		method: 'GET',
		success : function(res) {
			$('.userLogged').html(res['name']);
			$('textarea').html(
				'Your Email is :' + res['email'] + '\n'
			);
		}
	})
})