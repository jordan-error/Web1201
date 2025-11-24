function toggleContent3() {
    var element = document.body;
    const element1 = document.getElementById("about");
    const element2 = document.getElementById("personal_about");
    const profile3 = document.getElementById("profile3");
    const start = document.getElementById("start");

    if (element2.style.display === 'none' || element2.style.display === '') {
        element2.style.display = 'inline-flex';
        element1.style.display = 'none';
        start.style.display = 'none';
        profile3.style.display = 'block';
    } else {
        element2.style.display = 'none';
        element1.style.display = 'inline-flex';
        start.style.display = 'block';
        profile3.style.display = 'none';
    }
}

const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    var element = document.body;
    var icon = document.getElementById("themeIcon");
    
    // Change icon
    if(document.body.classList.contains('dark-mode')) {
        icon.src = "images/dark.png"; // sun for dark mode
        element.style.transition = "all 0.3s";
    } else {
        icon.src = "images/bright.png" // moon for light mode
        element.style.transition = "all 0.3s";
    }})