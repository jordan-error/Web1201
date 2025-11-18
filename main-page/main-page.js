//Toggle side panel for Spaces
document.querySelector('#SpacesToggleButton').addEventListener('click', () => {
    console.log('Spaces toggle clicked');
    document.querySelector(".wrapper").classList.toggle('side-panel-open-1');
});

document.querySelector('#Spaces').addEventListener('click', () => {
    console.log('Spaces button clicked');
    document.querySelector(".wrapper").classList.toggle('side-panel-open-1');
    
});

//Toggle side panel for Music
document.querySelector('#MusicToggleButton').addEventListener('click', () => {
    console.log('Music toggle clicked');
    document.querySelector(".wrapper").classList.toggle('side-panel-open-2');
});

document.querySelector('#Sounds').addEventListener('click', () => {
    console.log('Music button clicked');
    document.querySelector(".wrapper").classList.toggle('side-panel-open-2');
});

// Change background video on button click
//Changing to Cafe at Night
var button = document.getElementById("RainyCafeAtNight");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "https://cdn.pixabay.com/video/2024/02/25/201947-916877801_tiny.mp4";
})

//Changing to Hollow Forest
var button = document.getElementById("HollowForest");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "https://cdn.pixabay.com/video/2025/11/13/315735_tiny.mp4";
})

//Changing to By The Ocean
var button = document.getElementById("ByTheOcean");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "//cdn.pixabay.com/video/2018/12/14/19986-306716261_tiny.mp4";
})

//Changing to Snowy Cabin
var button = document.getElementById("SnowyCabin");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "https://cdn.pixabay.com/video/2022/09/11/130878-748595919_large.mp4";
})

//Changing to Toronto
var button = document.getElementById("Toronto");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "https://cdn.pixabay.com/video/2024/11/24/243075_large.mp4";
})

//Changing to Star Wars
var button = document.getElementById("StarWars");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "https://cdn.pixabay.com/video/2021/05/09/73654-549527823_large.mp4";
})

//Changing to Star Wars
var button = document.getElementById("AnimeGirlStudying");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "https://cdn.pixabay.com/video/2024/05/30/214500_large.mp4";
})

//Changing to Fire Place 
var button = document.getElementById("FirePlace");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "https://cdn.pixabay.com/video/2019/09/24/27203-362518512_large.mp4";
})

//Changing to Fire Place 
var button = document.getElementById("DystopianCity");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "https://cdn.pixabay.com/video/2022/05/11/116678-708909905_large.mp4";
})

//Changing to Cafe
var button = document.getElementById("Cafe");
var bg = document.getElementsByClassName("background-video")[0];
button.addEventListener("click",()=>{
    bg.src = "https://cdn.pixabay.com/video/2024/02/12/200260-912384743_large.mp4";
})
