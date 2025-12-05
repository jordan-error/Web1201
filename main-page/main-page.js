const  sideNavBar = document.querySelector('.side-nav-bar');
const rightColumn = document.querySelector('.right-column');

let idleTimer;
const idleTimeLimit = 10000;

function resetIdleTimer() {
    clearTimeout(idleTimer);

    console.log("Movement Detected.");
    sideNavBar.classList.remove('user-idle');  
    rightColumn.classList.remove('user-idle');


    idleTimer = setTimeout(onIdle, idleTimeLimit);
}

function onIdle() {
    console.log("Time is up! Going to sleep (Adding 'user-idle' class)...");
    sideNavBar.classList.add('user-idle');
    rightColumn.classList.add('user-idle');
    wrapper.classList.remove('side-panel-open-1');
    wrapper.classList.remove('side-panel-open-2');
    wrapper.classList.remove('side-panel-open-3');
    wrapper.classList.remove('side-panel-open-4');
}

// Listeners for movement
window.addEventListener('mousemove', resetIdleTimer);
window.addEventListener('click', resetIdleTimer);
window.addEventListener('keypress', resetIdleTimer);
window.addEventListener('load', resetIdleTimer);