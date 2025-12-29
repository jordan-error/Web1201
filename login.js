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
		window.location.href = "main-page.html"
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
	let mode = document.cookie.split("=")[1];
	if(iserror){
		error_element.style.display = "flex";
		error_element.style.color = "red";
		if(mode == "dark"){
			error_element.childNodes[0].src = "images/close_small.png";
		}
		else{
			error_element.childNodes[0].src = "images/close_small_dark.png";
		}
	}
	else{
		error_element.style.color = "green";
		if(mode == "dark"){
			error_element.childNodes[0].src = "images/check.png";
		}
		else{
			error_element.childNodes[0].src = "images/check_dark.png";
		}
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
	const inputField = reveal.previousSibling;
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const isDarkMode = currentTheme === "dark";

        if (inputField.value) {
            if (inputField.type === "password") {
                inputField.type = "text";
                reveal.src = isDarkMode ? "images/visibility_off.png" : "images/visibility_off_dark.png";
            } else {
                inputField.type = "password";
                reveal.src = isDarkMode ? "images/visibility.png" : "images/visibility_dark.png";
            }
        }
    });
})

register_username.addEventListener("input",()=>{
	const register_error = document.getElementById("username_error");
	const input_val = register_username.value;
	//Regular expression to test for only alphanumeric characters and (.) (_) (-) char
	const username_regex = /^[a-zA-Z0-9@._-\s]+$/;
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
	const confirm_error = document.getElementById("confirm_error");
	const confirm_val = confirm_password.value;
	if(register_password.value.length > 0){
		if(confirm_val !== register_password.value){
		change_status(confirm_error,true);
		}
		else{
			change_status(confirm_error,false);
		}
	}
})
confirm_password.addEventListener("input",()=>{
	const register_error = document.getElementById("confirm_error");
	const input_val = confirm_password.value;
	//Ensure the confirm password value is the same as the password
	if(register_password.value.length > 0){
		if(input_val !== register_password.value){
			change_status(register_error,true);
		}
		else{
			change_status(register_error,false);
		}
	}
})

function change_theme() {
    let theme_toggle = document.getElementById('theme-toggle');
    let html_theme = document.getElementsByTagName('html')[0];
    let currentMode = html_theme.getAttribute("data-theme");
    let newMode = (currentMode === "dark") ? "light" : "dark";
    html_theme.setAttribute("data-theme", newMode);
    document.cookie = `theme=${newMode}; path=/`;
    theme_toggle.querySelector('img').src = (newMode === "dark") ? "images/light.png" : "images/moon.png";
    document.querySelectorAll('.logo').forEach(img => {
        let src = img.src;
        if (newMode === "dark") {
            img.src = src.replace("_dark.png", ".png");
        } else {
            if (!src.includes("_dark.png")) {
                img.src = src.replace(".png", "_dark.png");
            }
        }
    });
}

function load_theme(){
	let mode = document.cookie.split("=")[1];
	if(!mode){
		mode = "dark";
		document.cookie = "theme=dark";
	}
	let html_theme = document.getElementsByTagName('html')[0];
	html_theme.setAttribute("data-theme",mode);
}


document.getElementById("modal-close").addEventListener("click",()=>{
	hide_modal();
})
