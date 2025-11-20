//Toggle side panel for Music
document.querySelector('#MusicToggleButton').addEventListener('click', () => {
    console.log('Music toggle clicked');
    document.querySelector(".wrapper").classList.toggle('side-panel-open-2');
});

document.querySelector('#Sounds').addEventListener('click', () => {
    console.log('Sound button clicked');
    document.querySelector(".wrapper").classList.toggle('side-panel-open-2');
});

