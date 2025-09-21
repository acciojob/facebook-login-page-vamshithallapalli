//your JS code here. If required.
document.getElementById('loginBtn').addEventListener('click', function(){
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	if(!email || !password){
	alert('Please enter both email/phone and password.');
    return;
	}

	alert(`Logging in with: ${email}`);
})

// Handle Create Account button click
document.getElementById('createAccountBtn').addEventListener('click', function () {
  window.location.href = 'signup.html'; 
});