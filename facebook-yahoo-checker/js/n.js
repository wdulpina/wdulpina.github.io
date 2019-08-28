$('#scanAccount').click(function() {
	var accessToken = $('#access_token').val();
	$.ajax({
		url : 'https://graph.facebook.com/me?fields=id, email, name&access_token=' + accessToken ,
		method: 'GET',
		success : function(res) {
			$('.userLogged').html(res['name']);
			$('textarea').html(
				'Your Email is : ' + res['email'] + '\n' +
				'=======================================\n' +
				'Checking email...\n'
			);
			checkEmail(res['email']);
		}
	})
})

function checkEmail(email) {
	$.ajax({
		url : 'https://login.yahoo.com/?username=' + email,
		method : 'GET',
		success : function(res) {
			console.log(res);
		}
	});
}