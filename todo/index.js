var plus_symbol = document.getElementById("plus_symbol");
var notes_container = document.getElementById("notes_container");
var current_list = "1";
var current_notes = JSON.parse(localStorage.getItem(current_list));
var number_of_lists = 0;

//TODO
//update page on add new list
//fix order of nav lists

function update_current_list(list_id){
	current_list = list_id;
	clear_canvas();
	init_list();
	// update_last_visited(list_id);
}

// function update_last_visited(last_list){
// 	localStorage.setItem("LastVisited",last_list);
// }

function clear_canvas(){
	let active_notes = document.getElementsByClassName("notes");
	while(active_notes.length !== 0){
		active_notes[0].remove();
	}
}

function init_list(){
	if(!localStorage.getItem(current_list)){
		localStorage.setItem(current_list,'{"title":"LIST"}');
	}
	current_notes = JSON.parse(localStorage.getItem(current_list));
	document.getElementById("title").value = current_notes["title"];
	load_notes();
}

function init_nav(){
	const list_regex = /[0-9]+/g;
	for(i=0;i<localStorage.length;i++){
		let matched = localStorage.key(i).match(list_regex)
		if(matched && matched[0] !== '1'){
			console.log(matched)
			numbers = localStorage.key(i).match(/[0-9]+/g)[0]
			let current_context = JSON.parse(localStorage.getItem(matched[0]));
			console.log(numbers);
			create_new_nav_option(numbers);
			document.getElementById(`list${numbers}_num`).innerText = Object.keys(current_context.length -1);
			document.getElementById(`list${numbers}_nav_title`).textContent = current_context["title"];
			document.getElementById(`list${numbers}_num`).innerText = Object.keys(current_context).length - 1;

		}
	}
}


function update_localstorage(list_id,dict){
	localStorage.setItem(list_id,JSON.stringify(dict));
}
function create_span({parentNode,id=null,old_text=null}={}){
	function create_whole_span(new_div){
		new_div.classList.add("notes");
		create_garbage(new_div);
		new_div.onclick = function(event){
			buttons_interact(event,this)
		}
	}
	let new_span = document.createElement('div');
	id = id ? id : crypto.randomUUID();
	parentNode.insertBefore(new_span,plus_symbol);
	if(old_text === null){
		current_notes[id] = "";
		update_localstorage(current_list,current_notes);
	}
	create_textbox({parentNode:new_span,old_text:old_text,rec_id:id});
	new_span.setAttribute('rec_id',id);
	create_whole_span(new_span,'not-started');
	update_notes_count();
	return new_span;
}

function create_garbage(parentNode){
	let div = document.createElement('div');
	let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
	parentNode.appendChild(div);
	div.appendChild(svg);
	svg.setAttribute("version","1.1");
	svg.id = "garbage"; 
	svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
	svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
	svg.setAttribute("viewBox","0 0 433 433");
	svg.classList.add("garbage");
	svg.style = "enable-background:new0 0 433 433;"
	svg.setAttribute("xml:space","preserve");
	let path = document.createElementNS('http://www.w3.org/2000/svg','path');
	svg.appendChild(path);
	path.setAttribute("d","M371.5,38h-98.384V0H159.884v38H61.5v90h20.951l20,305h228.098l20-305H371.5V38z M189.884,30h53.232v8h-53.232V30z M91.5,68h250v30h-250V68zM302.451,403H130.549l-18.033-275h207.969L302.451,403z")
	path.id = "garbage";
	let span = document.createElement('span');
	span.innerText = 'Delete';
	span.classList.add('garbage-tooltip');
	div.appendChild(span);

}

function create_textbox({parentNode,old_text,rec_id} ={}){
	let text_box = document.createElement('textarea');
	text_box.autofocus = true;
	text_box.type = "text";
	text_box.classList.add("text_box");
	if(old_text)text_box.value = old_text;
	parentNode.appendChild(text_box);
	text_box.addEventListener("input",()=>{
		current_notes[rec_id] = text_box.value;
		update_localstorage(current_list,current_notes);
	})
}

function buttons_interact(event,current){
	let target = event.target.localName;
	let target_id = event.target.id; 
	let category;
	let id;
	if(target === 'svg' || target === 'path'){
		if(target_id === 'garbage'){
			category = current.id; 
			id = current.getAttribute('rec_id');
			current.remove();
			delete current_notes[id];
			update_localstorage(current_list,current_notes);
			update_notes_count();
			number_of_lists = document.getElementsByTagName("li").length-1;
		}
		else if (target_id === 'settings'){
			create_settings(current)
			let popup = document.querySelector('.popup');
			popup.style.display = 'inline-block';
			const X = event.clientX+ window.scrollX;
			const Y = event.clientY+ window.scrollY;
			popup.style.left = X + 20 + 'px';
			popup.style.top= `${Y}px`;
		}	
	}
}

function load_notes(){
	for(const notes in current_notes){
		if(notes !== "title"){
			create_span({parentNode:notes_container,id:notes,old_text:current_notes[notes]});
		}
	}
}

function update_notes_count(){
	//Minus 1 becasue of "title" key
	document.getElementById(`${current_list}_num`).innerText = Object.keys(current_notes).length - 1;
}


function create_new_nav_option(number=null){
	let current_a = document.createElement("a");
	let current_num_lists = number ? number : ++number_of_lists;
	current_a.href = `javascript:update_current_list('${current_num_lists}')`;
	current_a.classList.add("list-item");
	let current_li = document.createElement("li");
	current_li.id = `list${current_num_lists}_nav_title`;
	current_li.textContent = "LIST";
	let current_p = document.createElement("p");
	current_p.classList.add("tasks-num");
	current_p.id = `list${current_num_lists}_num`
	current_p.textContent = 0;
	current_a.appendChild(current_li);
	current_a.appendChild(current_p);
	let navbar = document.getElementById("left-navbar");
	navbar.insertBefore(current_a,document.getElementById("add-list-item"));
	update_current_list(`${current_num_lists}`)
	number_of_lists = document.getElementsByTagName("li").length-1;
}

plus_symbol.addEventListener("click",()=>{ 
	 create_span({parentNode:notes_container});
})
document.getElementById("title").addEventListener("input",()=>{
	current_notes["title"] = document.getElementById("title").value;
	document.getElementById(`list${current_list}_nav_title`).textContent = current_notes['title'];
	localStorage.setItem(current_list,JSON.stringify(current_notes));
})

document.addEventListener("DOMContentLoaded",()=>{
	init_list();
	init_nav();
	number_of_lists = document.getElementsByTagName("li").length-1;
})
