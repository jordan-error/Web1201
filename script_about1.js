function toggleContent3() {
    var element = document.body;
    const element1 = document.getElementById("about");
    const element2 = document.getElementById("personal_about");
    const profile3 = document.getElementById("profile3");
    const start = document.getElementById("start");
    const parts = document.getElementById("parts");
    const rightside = document.getElementById("right_side");

    // Check the current state of element2.style.display
    if (element2.style.display === 'none' || element2.style.display === '') {
        // Switch to personal_about view
        element2.style.display = 'inline-flex';
        element1.style.display = 'none';
        start.style.display = 'none';
        profile3.style.display = 'block';
        parts.style.display = "inline-flex";
        rightside.style.height = "60vh";
    } else {
        // Switch back to about view
        element2.style.display = 'none';
        element1.style.display = 'inline-flex';
        // Note: I changed start.style.display to 'none' if profile3 is 'block' 
        // in the first block, so setting it back to 'flex' here makes sense.
        start.style.display = 'flex'; 
        profile3.style.display = 'none';
        parts.style.display = "none";
        rightside.style.height = "80vh";
    }
}

const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
    // 1. Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
    
    // 2. Identify the icon span and the link text
    const iconSpan = toggleBtn.querySelector('.material-symbols-outlined');
    
    // 3. Change icon and text based on the resulting state
    if (document.body.classList.contains('dark-mode')) {
        // If 'dark-mode' is now active (meaning we are in the BRIGHT theme)
        
        // Change icon to signal switching back to DARK mode (moon icon)
        if (iconSpan) {
            iconSpan.textContent = 'dark_mode'; // Material Symbol for moon/dark mode
        }
        // Change link text to reflect the action/target state
        toggleBtn.childNodes[1].nodeValue = ' Dark'; // Assuming the text node is the 3rd child
    } else {
        // If 'dark-mode' is NOT active (meaning we are in the DEFAULT DARK theme)
        
        // Change icon to signal switching to LIGHT mode (sun icon)
        if (iconSpan) {
            iconSpan.textContent = 'sunny'; // Material Symbol for sun/light mode
        }
        // Change link text to reflect the action/target state
        toggleBtn.childNodes[1].nodeValue = ' Light';
    }
});