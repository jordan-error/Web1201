const login = document.getElementById("login");
const register = document.getElementById("register");
const login_text = document.getElementById("login-text");
const sign_inButton = document.getElementById("login-button");

register.addEventListener("click",()=>{
	if(register.innerText === "Register now"){
		document.getElementById("login-text").innerText = "Register";
		register.innerText = "Login";
		sign_inButton.innerText = "Register";
	}
	else{
		document.getElementById("login-text").innerText = "Sign in";
		register.innerText = "Register now";
		sign_inButton.innerText = "Sign in";
	}
})
