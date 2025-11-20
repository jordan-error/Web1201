// Toggle side panel for Spaces
document.querySelector('#SpacesToggleButton').addEventListener('click', () => {
    console.log('Spaces toggle clicked');
    document.querySelector(".wrapper").classList.toggle('side-panel-open-1');
});

document.querySelector('#Spaces').addEventListener('click', () => {
    console.log('Spaces button clicked');
    document.querySelector(".wrapper").classList.toggle('side-panel-open-1');
});

// Change background video on button click
function setBackgroundVideo(buttonId, videoUrl) {
    const button = document.getElementById(buttonId);
    const bg = document.querySelector(".background-video source");
    button.addEventListener("click", () => {
        bg.src = videoUrl;
        bg.parentElement.load(); // Reload the video element to apply the new source
    });
}

// Changing to Cafe at Night
setBackgroundVideo("RainyCafeAtNight", "https://cdn.pixabay.com/video/2024/02/25/201947-916877801_tiny.mp4");

// Changing to Hollow Forest
setBackgroundVideo("HollowForest", "https://cdn.pixabay.com/video/2025/11/13/315735_tiny.mp4");

// Changing to By The Ocean
setBackgroundVideo("ByTheOcean", "https://cdn.pixabay.com/video/2018/12/14/19986-306716261_tiny.mp4");

// Changing to Snowy Cabin
setBackgroundVideo("SnowyCabin", "https://cdn.pixabay.com/video/2022/09/11/130878-748595919_large.mp4");

// Changing to Toronto
setBackgroundVideo("Toronto", "https://cdn.pixabay.com/video/2024/11/24/243075_large.mp4");

// Changing to Star Wars
setBackgroundVideo("StarWars", "https://cdn.pixabay.com/video/2021/05/09/73654-549527823_large.mp4");

// Changing to Anime Girl Studying
setBackgroundVideo("AnimeGirlStudying", "https://cdn.pixabay.com/video/2024/05/30/214500_large.mp4");

// Changing to Fire Place
setBackgroundVideo("FirePlace", "https://cdn.pixabay.com/video/2019/09/24/27203-362518512_large.mp4");

// Changing to Dystopian City
setBackgroundVideo("DystopianCity", "https://cdn.pixabay.com/video/2022/05/11/116678-708909905_large.mp4");

// Changing to Cafe
setBackgroundVideo("Cafe", "https://cdn.pixabay.com/video/2024/02/12/200260-912384743_large.mp4");
