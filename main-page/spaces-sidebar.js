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
function setBackgroundVideoAndAudio(buttonId, videoUrl, backgroundTitle, audioUrl) {
    const button = document.getElementById(buttonId);
    const bg = document.querySelector(".background-video source");
    const cbt = backgroundTitle;
    const titleElement = document.getElementById("CurrentBackgroundTitle");
    const bgAudio = document.getElementById("BackgroundAudioPlayer");
    button.addEventListener("click", () => {
        bg.src = videoUrl;
        bg.parentElement.load(); 
        titleElement.innerHTML = cbt;
        bgAudio.src = audioUrl;
        bgAudio.load();
        bgAudio.play();
    });
}

// Changing to Cafe at Night
setBackgroundVideoAndAudio("RainyCafeAtNight", "https://cdn.pixabay.com/video/2024/02/25/201947-916877801_tiny.mp4", "Rainy Cafe at Night", "https://www.orangefreesounds.com/wp-content/uploads/2018/04/Gentle-rain-loop.mp3?_=1");

// Changing to Hollow Forest
setBackgroundVideoAndAudio("HollowForest", "https://cdn.pixabay.com/video/2025/11/13/315735_tiny.mp4","Hollow Forest","https://cdn.pixabay.com/audio/2022/02/10/audio_e290190cff.mp3?filename=light-forest-sounds-18673.mp3");

// Changing to By The Ocean
setBackgroundVideoAndAudio("ByTheOcean", "https://cdn.pixabay.com/video/2018/12/14/19986-306716261_tiny.mp4","By The Ocean","https://cdn.pixabay.com/audio/2025/07/09/audio_56227295c2.mp3?filename=soothing-ocean-waves-372489.mp3");

// Changing to Snowy Cabin
setBackgroundVideoAndAudio("SnowyCabin", "https://cdn.pixabay.com/video/2022/09/11/130878-748595919_large.mp4","Snowy Cabin","https://cdn.pixabay.com/audio/2023/06/28/audio_d2602aad9f.mp3");

// Changing to Toronto
setBackgroundVideoAndAudio("Toronto", "https://cdn.pixabay.com/video/2024/11/24/243075_large.mp4","Toronto","https://cdn.pixabay.com/audio/2025/02/04/audio_afe1c46fe3.mp3");

// Changing to Star Wars
setBackgroundVideoAndAudio("StarWars", "https://cdn.pixabay.com/video/2021/05/09/73654-549527823_large.mp4","Star Wars","https://nu.vgmtreasurechest.com/soundtracks/star-wars-battlefront-ii/rfdyiwic/27.%20Sith%20Archives.mp3");

// Changing to Anime Girl Studying
setBackgroundVideoAndAudio("AnimeGirlStudying", "https://cdn.pixabay.com/video/2024/05/30/214500_large.mp4","Anime Girl Studying", "https://cdn.pixabay.com/audio/2022/04/26/audio_40302f854a.mp3?filename=study-110111.mp3");

// Changing to Fire Place
setBackgroundVideoAndAudio("FirePlace", "https://cdn.pixabay.com/video/2019/09/24/27203-362518512_large.mp4","Fire Place","https://cdn.pixabay.com/audio/2023/11/25/audio_41a3f1192f.mp3?filename=fireplace-loop-original-noise-178209.mp3");

// Changing to Dystopian City
setBackgroundVideoAndAudio("DystopianCity", "https://cdn.pixabay.com/video/2022/05/11/116678-708909905_large.mp4","Dystopian City","https://nu.vgmtreasurechest.com/soundtracks/cyberpunk-2077-more-music-from-night-city-radio/yketeohu/2-05%20-%20I%20Really%20Want%20to%20Stay%20at%20Your%20House.mp3");

// Changing to Cafe
setBackgroundVideoAndAudio("Cafe", "https://cdn.pixabay.com/video/2024/02/12/200260-912384743_large.mp4","Cafe","https://cdn.pixabay.com/audio/2022/03/10/audio_9a103c8b91.mp3?filename=cafe-noise-32940.mp3");
