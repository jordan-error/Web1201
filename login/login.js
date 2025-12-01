const login_form = document.getElementById("login");
const register_button = document.getElementById("register-button");
const login_text = document.getElementById("login-text");
const sign_inButton = document.getElementById("login-button");
const error_text = document.getElementById("error")
const username = document.getElementById("username");
const password = document.getElementById("password");
const register_username = document.getElementById("register_username");
const register_password = document.getElementById("register_password");
const confirm_password = document.getElementById("register_confirm_password");

function login(){
	if(username.value === "admin" && password.value === "password"){
		window.location.href = "/main-page/main-page.html"
		return;
	}
	username.classList.add("wrong")
	password.classList.add("wrong")
	if(error_text.style.display === "block"){
		error_text.style.visibility = "hidden";
		setTimeout(()=>{error_text.style.visibility = "visible"},400);
	}
	else{
		error_text.style.display = "block";
	}
	error_text.classList.add("show");
}
document.querySelectorAll(".eye").forEach(reveal=>{reveal.addEventListener("click",()=>{
	if(reveal.previousSibling.value){
		reveal.innerText === "visibility" ? reveal.innerText = "visibility_off" : reveal.innerText = "visibility";
		reveal.previousSibling.type === "text" ? reveal.previousSibling.type = "password": reveal.previousSibling.type = "text";
		}
	})
})

function openRegister(){
	document.getElementById("register-modal").style.display = "flex";
}
register_username.addEventListener("input",()=>{
	const register_error = document.getElementById("username_error");
	const input_val = register_username.value;
	//Regular expression to test for only alphanumeric characters and (.) (_) (-) char
	const username_regex = /^[a-zA-Z0-9._-]+$/;
	if(input_val.length < 5 || !username_regex.test(input_val)){
		register_error.style.display = "flex";
		register_error.style.color = "red";
		register_error.childNodes[0].innerText = "close";
	}
	else{
		register_error.style.color = "green";
		register_error.childNodes[0].innerText = "check";
	}
})
register_password.addEventListener("input",()=>{
	const register_error = document.getElementById("password_error");
	const input_val = register_password.value;
	//Regular expression to test for only alphanumeric characters and (.) (_) (-) char
	const password_regex = /^[\w\s~`!@#$%^&*()_+\-=\[\]{}|\\:;"'<,>.?/]+$/;
	if(input_val.length < 8 || !password_regex.test(input_val)){
		register_error.style.display = "flex";
		register_error.style.color = "red";
		register_error.childNodes[0].innerText = "close";
	}
	else{
		register_error.style.color = "green";
		register_error.childNodes[0].innerText = "check";
	}
})
confirm_password.addEventListener("input",()=>{
	const register_error = document.getElementById("confirm_error");
	const input_val = confirm_password.value;
	//Regular expression to test for only alphanumeric characters and (.) (_) (-) char
	if(input_val !== register_password.value){
		register_error.style.display = "flex";
		register_error.style.color = "red";
		register_error.childNodes[0].innerText = "close";
	}
	else{
		register_error.style.color = "green";
		register_error.childNodes[0].innerText = "check";
	}
})

