var plus_symbol = document.getElementById("plus_symbol");
var notes_container = document.getElementById("notes_container");
var current_list_id = "35fd7e4c-5e49-4b36-8d81-f9da7b66bc82";
var all_lists = JSON.parse(localStorage.getItem("todolist"));
var note_map = {};
var list_map = {};
var current_list = {}; 
var current_notes = {};

//Load the lists and notes into memory so i can do constant time lookup with dictionaries instead of having to iterate over arr_lists everytime
function load_map(){
	for(const list of all_lists){
		list_map[list.id] = list;
		note_map[list.id] = list.notes;
	}
}
function update_current_list(list_id){
	current_list_id = list_id;
	console.log(`Switched to list ${current_list_id}`);
	//remove the selected class from previous selected list item
	for (const i of document.querySelectorAll(".selected")){
		i.classList.remove("selected");
	}
	//give the list item the selected class 
	document.getElementById(`${current_list_id}_nav_title`).classList.add("selected");
	clear_canvas();
	init_list();
}

function clear_canvas(){
	let active_notes = document.getElementsByClassName("notes");
	while(active_notes.length !== 0){
		active_notes[0].remove();
	}
}

function update_localstorage(){
	localStorage.setItem("todolist",JSON.stringify(all_lists));
}

function init_list(){
	if(!localStorage.getItem("todolist")){
		localStorage.setItem("todolist",JSON.stringify([{"id":"35fd7e4c-5e49-4b36-8d81-f9da7b66bc82","title":"LIST","timestamp":new Date(),"notes":{}}]))
		all_lists = JSON.parse(localStorage.getItem("todolist"));
	}
	load_map();
	if(!list_map[current_list_id]){
		new_list = {"id":current_list_id,"title":"LIST","timestamp":new Date(),"notes":{}};
		all_lists.push(new_list);
		list_map[current_list_id] = new_list;
		note_map[current_list_id] = {};
		update_localstorage();
	}
	current_list = list_map[current_list_id];
	current_notes = note_map[current_list_id];
	document.getElementById("title").value = current_list["title"];
	console.log(current_notes)
	load_notes();
}

function load_notes(){
	for(const notes in current_notes){
		create_span({parentNode:notes_container,id:notes,old_text:current_notes[notes].content,old_header:current_notes[notes].header});
	}
}

function init_nav(){
	for(const i of Object.keys(list_map)){
		let current_context = list_map[i];
		if(i != "35fd7e4c-5e49-4b36-8d81-f9da7b66bc82"){
			create_new_nav_option(i);
			document.getElementById(`${i}_num`).innerText = Object.keys(current_context.notes).length;
		}
		document.getElementById(`${i}_nav_title`).textContent = current_context["title"];
	}
}


function add_note(note_dict){
	current_list.notes[note_dict.note_id] = note_dict;
	current_notes[note_dict.note_id] = note_dict;
	update_localstorage();
}
function remove_note(note_id){
	delete current_notes[note_id];
	update_localstorage();
}
function remove_list(list_id){
	let i = 0;
	for(const list of all_lists){
		if(list.id === list_id){
			all_lists.splice(i,1);
			update_current_list(all_lists[i-1].id);
		}
		i++;
	}
}
function create_span({parentNode,id=null,old_text=null,old_header=null}={}){
	function create_whole_span(new_div){
		new_div.classList.add("notes");
		create_garbage(new_div);
	}
	let new_span = document.createElement('div');
	id = id ? id : crypto.randomUUID();
	parentNode.insertBefore(new_span,plus_symbol);
	if(old_text === null){
		add_note({"note_id":id,"header":"","content":""});
		console.log(`Note Added to list_id: ${current_list.id} note_id: ${id}`);
	}
	let header = document.createElement("textarea");
	header.textContent = old_header ? old_header : "";
	header.maxLength = 20;
	header.placeholder = "Note Title";
	header.classList.add("note-header");
	header.addEventListener("input",()=>{
		current_notes[id].header = header.value;
		update_localstorage();
	})
	header.addEventListener("keydown",(event)=>{
		if(event.key == "Enter"){
			event.preventDefault();
		}
	})
	new_span.appendChild(header);
	create_textbox({parentNode:new_span,old_text:old_text,rec_id:id});
	new_span.setAttribute('rec_id',id);
	create_whole_span(new_span,'not-started');
	update_notes_count();
	update_localstorage();
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
	div.addEventListener("click",()=>{
		id = parentNode.getAttribute('rec_id');
		parentNode.remove();
		remove_note(id);
		update_notes_count();
		update_localstorage();
		console.log(`Note Removed: ${id}`);
	})
}

function create_x(parentNode) {
    let div = document.createElement("div");
    let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    parentNode.appendChild(div);
    div.appendChild(svg);
    div.style.position = "relative";
    svg.setAttribute("version","1.1");
    svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
    svg.setAttribute("viewBox","0 0 640 640");
    div.classList.add("setting");
    svg.style = "enable-background:new 0 0 640 640;";
    svg.setAttribute("xml:space","preserve");
    let path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('fill', 'rgb(225 94 106)'); 
    path.setAttribute("d","M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z");
    svg.appendChild(path);
	div.addEventListener("click",(event)=>{
		event.preventDefault();
		let delete_list_id = parentNode.getAttribute("list");
		delete list_map[delete_list_id];
		remove_list(delete_list_id);
		parentNode.remove();
		update_localstorage();
		console.log(`removed list: ${delete_list_id}`);
	})
}

function create_textbox({parentNode,old_text,rec_id} ={}){
	let text_box = document.createElement('textarea');
	text_box.autofocus = true;
	text_box.type = "text";
	text_box.classList.add("text_box");
	text_box.placeholder = "Content"
	if(old_text)text_box.value = old_text;
	parentNode.appendChild(text_box);
	text_box.addEventListener("input",()=>{
		current_notes[rec_id].content = text_box.value;
		update_localstorage();
	})
}


function update_notes_count(){
	//Minus 1 becasue of "title" key
	let len = Object.keys(current_notes).length;
	console.log(current_notes);
	document.getElementById(`${current_list_id}_num`).innerText = len;
	console.log(`note count has changed to ${len}`)
}


function create_new_nav_option(uuid=null){
	let current_a = document.createElement("a");
	let new_note_uuid = uuid ? uuid : crypto.randomUUID();
	current_a.setAttribute("list",new_note_uuid);
	current_a.href = `javascript:update_current_list('${new_note_uuid}')`;
	current_a.classList.add("list-item");
	let current_li = document.createElement("li");
	current_li.id = `${new_note_uuid}_nav_title`;
	current_li.textContent = "LIST";
	let current_p = document.createElement("p");
	current_p.classList.add("tasks-num");
	current_p.id = `${new_note_uuid}_num`
	current_p.textContent = 0;
	current_a.appendChild(current_li);
	current_a.appendChild(current_p);
	let navbar = document.getElementById("left-navbar");
	navbar.insertBefore(current_a,document.getElementById("add-list-item"));
	update_current_list(`${new_note_uuid}`)
	create_x(current_a)
	console.log(`New List Created: ${new_note_uuid}`);
}

function change_theme(){
	let theme_toggle = document.getElementById('theme-toggle');
	let html_theme = document.getElementsByTagName('html')[0];
	let mode = document.cookie.split("=")[1];
	mode == "dark" ? theme_toggle.firstChild.innerText = "dark_mode" : theme_toggle.firstChild.innerText = "light_mode"
	mode == "dark" ? html_theme.setAttribute("data-theme","light") : html_theme.setAttribute("data-theme","dark");
	mode == "dark" ? document.cookie = "theme=light" : document.cookie = "theme=dark";
}
function load_theme(){
	let mode = document.cookie.split("=")[1];
	let html_theme = document.getElementsByTagName('html')[0];
	html_theme.setAttribute("data-theme",mode);
}
plus_symbol.addEventListener("click",()=>{ 
	 create_span({parentNode:notes_container});
})
document.getElementById("title").addEventListener("input",()=>{
	current_list["title"] = document.getElementById("title").value;
	document.getElementById(`${current_list_id}_nav_title`).textContent = current_list['title'];
	update_localstorage();
})

document.addEventListener("DOMContentLoaded",()=>{
	init_list();
	init_nav();
	load_theme();
})
document.getElementById("title").addEventListener("keydown",(event)=>{
	if(event.key == "Enter"){
		event.preventDefault();
	}
})
