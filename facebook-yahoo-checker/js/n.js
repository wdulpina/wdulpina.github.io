$('#startChecking').click(function() {
	$.ajax({
		url : 'https://graph.facebook.com/me/friends?access_token=' + accessToken ,
		method: 'GET',
		success : function(res) {
			console.log(res);
		}
	})
})