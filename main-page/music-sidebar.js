//Toggle side panel for Music
document.querySelector('#MusicToggleButton').addEventListener('click', () => {
    console.log('Music toggle clicked');
    const wrapper = document.querySelector(".wrapper");
    
    if (window.innerWidth <= 768) {
        wrapper.classList.remove('side-panel-open-1'); 
    }
    wrapper.classList.toggle('side-panel-open-2');
});

document.querySelector('#Sounds').addEventListener('click', () => {
    console.log('Sound button clicked');
    const wrapper = document.querySelector(".wrapper");
    if (window.innerWidth <= 768) {
        wrapper.classList.remove('side-panel-open-1');
    }
    wrapper.classList.toggle('side-panel-open-2');
});

