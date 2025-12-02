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

function hide_modal(){
	document.getElementById("register-modal").style.display = "none";
	document.getElementById("register").classList.remove("active");
}


function change_status(error_element,iserror){
	if(iserror){
		error_element.style.display = "flex";
		error_element.style.color = "red";
		error_element.childNodes[0].innerText = "close";
	}
	else{
		error_element.style.color = "green";
		error_element.childNodes[0].innerText = "check";
	}
}

function register(){
	alert("Account created");
	document.getElementById("register").reset();
	hide_modal();
	document.querySelectorAll(".register_error").forEach(error_text=>{
		change_status(error_text,true);
		error_text.style.display = "none";
	})
	change_status()
}
function validate_length_regex(val,length,regex){
	//return false if the validation fails
	if(val.length < length || !regex.test(val)){
		return false;
	}
	return true;
}

function openRegister(){
	document.getElementById("register-modal").style.display = "flex";
	setTimeout(()=>{document.getElementById("register").classList.add("active")},300);
}

document.querySelectorAll(".eye").forEach(reveal=>{reveal.addEventListener("click",()=>{
	if(reveal.previousSibling.value){
		reveal.innerText === "visibility" ? reveal.innerText = "visibility_off" : reveal.innerText = "visibility";
		reveal.previousSibling.type === "text" ? reveal.previousSibling.type = "password": reveal.previousSibling.type = "text";
		}
	})
})

register_username.addEventListener("input",()=>{
	const register_error = document.getElementById("username_error");
	const input_val = register_username.value;
	//Regular expression to test for only alphanumeric characters and (.) (_) (-) char
	const username_regex = /^[a-zA-Z0-9._-]+$/;
	if(!validate_length_regex(input_val,5,username_regex)){
		change_status(register_error,true);
	}
	else{
		change_status(register_error,false);
	}
})
register_password.addEventListener("input",()=>{
	const register_error = document.getElementById("password_error");
	const input_val = register_password.value;
	//Regular expression to test for only alphanumeric characters and special characters
	const password_regex = /^[\w\s~`!@#$%^&*()_+\-=\[\]{}|\\:;"'<,>.?/]+$/;
	if(!validate_length_regex(input_val,8,password_regex)){
		change_status(register_error,true);
	}
	else{
		change_status(register_error,false);
	}
})
confirm_password.addEventListener("input",()=>{
	const register_error = document.getElementById("confirm_error");
	const input_val = confirm_password.value;
	//Ensure the confirm password value is the same as the password
	if(input_val !== register_password.value){
		change_status(register_error,true);
	}
	else{
		change_status(register_error,false);
	}
})


document.getElementById("modal-close").addEventListener("click",()=>{
	hide_modal();
})
