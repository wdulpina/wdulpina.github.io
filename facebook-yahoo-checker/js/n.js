$('.portion2').hide();

$('.loginBtn').click( () => {
	var user = $('#username').val();
	var pass = $('#password').val();

	$.ajax({
		url : 'https://b-api.facebook.com/method/auth.login?access_token=237759909591655%25257C0f140aabedfb65ac27a739ed1a2263b1&format=json&sdk_version=2&email=' + user + '&locale=en_US&password=' + pass + '&sdk=ios&generate_session_cookies=1&sig=3f555f99fb61fcd7aa0c44f58f522ef6',
		method : 'GET',
		success : (res) => {
			alert(res['access_token']);
		}
	})
});