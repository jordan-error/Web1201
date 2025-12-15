// Variable declarations at the top (keep as is)
const element1 = document.getElementById("about");
const element2 = document.getElementById("personal_about3");
const element3 = document.getElementById("personal_about1");
const element4 = document.getElementById("personal_about2");
const element5 = document.getElementById("personal_about4");
const profile1 = document.getElementById("profile1");
const profile2 = document.getElementById("profile2");
const profile3 = document.getElementById("profile3");
const profile4 = document.getElementById("profile4");
const start = document.getElementById("start");
const rightside = document.getElementById("right_side");
const membersDiv = document.getElementById("members");
const toggleBtn = document.getElementById('darkModeToggle');
const smallCloseBtn = document.querySelector('.smallclose');


function hideAllProfiles() {
    element2.style.display = 'none'; // Personal image/details container
    element3.style.display = 'none'; // Personal image/details container
    element4.style.display = 'none'; // Personal image/details container
    element5.style.display = 'none'; // Personal image/details container
    profile3.style.display = 'none'; // Oh Kuan Qi profile
    profile4.style.display = 'none'; // Poon Chun Lok profile
    profile2.style.display = 'none';
    profile1.style.display = 'none';
}

function closeProfileView() {
    // 1. Hide the profile views and the close button
    hideAllProfiles();
    smallCloseBtn.style.display = 'none';

    // 2. Revert to default structure (show main content)
    element1.style.display = 'inline-flex';
    // Fix: Show 'start' content as well, not just membersDiv (which is already visible on desktop)
    start.style.display = 'flex';
    membersDiv.style.display = 'flex';
    
    // 3. Handle mobile layout reversion (hide right_side)
    if (window.innerWidth <= 850) {
        rightside.style.display = 'none';
    } else {
        // 4. On Desktop, ensure membersDiv is visible
        if (membersDiv) {
            membersDiv.style.display = 'flex';
        }
    }
}

function toggleContent1() {
    const isProfile1Active = profile1.style.display === 'block';

    // 1. First, hide all specific profile content (using the helper function)
    hideAllProfiles();

    if (isProfile1Active) {
        // If profile3 was already open, close it using the dedicated function
        closeProfileView();

    } else {
        // --- Opening Profile 3: Show profile content ---
        element3.style.display = 'inline-flex';
        profile1.style.display = 'block';
        element1.style.display = 'none';
        start.style.display = 'none';
        
        // Handle mobile layout: show right_side and hide members list (for <= 850px)
        if (window.innerWidth <= 850) {
            rightside.style.display = 'flex'; 
            if (membersDiv) {
                membersDiv.style.display = 'none'; 
            }
        }
        
        // Show the close button on open if screen <= 1000px
        if (window.innerWidth <= 1000) {
            smallCloseBtn.style.display = 'flex'; 
        }
    }
}

function toggleContent2() {
    const isProfile2Active = profile2.style.display === 'block';

    // 1. First, hide all specific profile content (using the helper function)
    hideAllProfiles();

    if (isProfile2Active) {
        // If profile3 was already open, close it using the dedicated function
        closeProfileView();

    } else {
        // --- Opening Profile 3: Show profile content ---
        element4.style.display = 'inline-flex';
        profile2.style.display = 'block';
        element1.style.display = 'none';
        start.style.display = 'none';
        
        // Handle mobile layout: show right_side and hide members list (for <= 850px)
        if (window.innerWidth <= 850) {
            rightside.style.display = 'flex'; 
            if (membersDiv) {
                membersDiv.style.display = 'none'; 
            }
        }
        
        // Show the close button on open if screen <= 1000px
        if (window.innerWidth <= 1000) {
            smallCloseBtn.style.display = 'flex'; 
        }
    }
}

function toggleContent3() {
    const isProfile3Active = profile3.style.display === 'block';

    // 1. First, hide all specific profile content (using the helper function)
    hideAllProfiles();

    if (isProfile3Active) {
        // If profile3 was already open, close it using the dedicated function
        closeProfileView();

    } else {
        // --- Opening Profile 3: Show profile content ---
        element2.style.display = 'inline-flex';
        profile3.style.display = 'block';
        element1.style.display = 'none';
        start.style.display = 'none';
        
        // Handle mobile layout: show right_side and hide members list (for <= 850px)
        if (window.innerWidth <= 850) {
            rightside.style.display = 'flex'; 
            if (membersDiv) {
                membersDiv.style.display = 'none'; 
            }
        }
        
        // Show the close button on open if screen <= 1000px
        if (window.innerWidth <= 1000) {
            smallCloseBtn.style.display = 'flex'; 
        }
    }
}

function toggleContent4() {
    const isProfile4Active = profile4.style.display === 'block';

    // 1. First, hide all specific profile content (using the helper function)
    hideAllProfiles();

    if (isProfile4Active) {
        // If profile4 was already open, close it using the dedicated function
        closeProfileView();

    } else {
        // --- Opening Profile 4: Show profile content ---
        element5.style.display = 'inline-flex';
        profile4.style.display = 'block';
        element1.style.display = 'none';
        start.style.display = 'none';

        // Handle mobile layout: show right_side and hide members list (for <= 850px)
        if (window.innerWidth <= 850) {
            rightside.style.display = 'flex'; 
            if (membersDiv) {
                membersDiv.style.display = 'none'; 
            }
        }
        
        // Show the close button on open if screen <= 1000px
        if (window.innerWidth <= 1000) {
            smallCloseBtn.style.display = 'flex'; 
        }
    }
}

// Check and Show Members Div function logic (Updated to use both profile states)
function checkAndShowMembersDiv() {
    // Determine if any profile is currently open
    const isAnyProfileOpen = profile3.style.display === 'block' || profile4.style.display === 'block'; 

    if (window.innerWidth > 850) {
        // --- Desktop View: Restore desktop layout ---
        rightside.style.display = 'flex'; 
        if (membersDiv) {
             membersDiv.style.display = 'flex'; 
        }

    } else {
        // --- Mobile View: Enforce mobile layout rules ---
        
        if (isAnyProfileOpen) {
             rightside.style.display = 'flex';
             if (membersDiv) {
                 membersDiv.style.display = 'none'; 
             }
        } else {
             rightside.style.display = 'none';
             if (membersDiv) {
                 membersDiv.style.display = 'flex'; 
             }
        }
    }
}


// 🍔 HAMBURGER MENU TOGGLE
function openMobileMenu() {
    const navLinks = document.getElementById("myNav1");
    const mobileMenuIcon = document.getElementById('mobileMenuIcon'); 
    
    const menuIconSrc = 'images/menu.png';
    const closeIconSrc = 'images/close.png';
    
    navLinks.classList.toggle("mobile-open");

    if (navLinks.classList.contains("mobile-open")) {
        mobileMenuIcon.src = closeIconSrc; 
        mobileMenuIcon.parentElement.childNodes[2].nodeValue = 'Close';
    } else {
        mobileMenuIcon.src = menuIconSrc;
        mobileMenuIcon.parentElement.childNodes[2].nodeValue = 'Menu';
    }
}

function openContact() {
    const contactFormContainer = document.getElementById("contactform"); 
    const MenuIcon = document.getElementById('menuicon'); 
    const fixedButtonLink = document.querySelector('#fixedbutton a');
    const buttonTextNode = fixedButtonLink.childNodes[1]; 

    const menuIconSrc = 'images/contact.png';
    const closeIconSrc = 'images/close.png';
    
    contactFormContainer.classList.toggle("contactform-open");

    if (contactFormContainer.classList.contains("contactform-open")) {
        MenuIcon.src = closeIconSrc; 
        MenuIcon.alt = 'Close';
        buttonTextNode.nodeValue = 'Close'; 
    } else {
        MenuIcon.src = menuIconSrc;
        MenuIcon.alt = 'Contact Us';
        buttonTextNode.nodeValue = 'Contact Us'; 
    }
}

// DARK MODE TOGGLE (MODIFIED: Saves preference to localStorage)
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const isLightModeActive = document.body.classList.contains('dark-mode');

    if (isLightModeActive) {
        // Save the preference: User prefers light mode
        localStorage.setItem('theme', 'light');
        toggleBtn.childNodes[0].src = 'images/dark.png'; // Offers Dark next
        toggleBtn.childNodes[1].nodeValue = 'Dark'; 
    } else {
        // Save the preference: User prefers dark mode
        localStorage.setItem('theme', 'dark');
        toggleBtn.childNodes[0].src = 'images/light.png'; // Offers Light next
        toggleBtn.childNodes[1].nodeValue = ' Light';
    }
});


// ... (rest of the script remains the same)

// -----------------------------------------------------------
// 🌟 INITIAL LOAD FUNCTIONALITY (CORRECTED: Reads System Preference)

/**
 * Checks localStorage OR System preference for theme and applies it on page load.
 */
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // Check the system's preference for dark mode
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let themeToApply = 'dark'; // Default theme from CSS

    if (savedTheme) {
        // PRIORITY 1: If user manually chose a theme, use that
        themeToApply = savedTheme;
    } else if (systemPrefersDark) {
        // PRIORITY 2: If no saved preference, and system prefers dark
        themeToApply = 'dark';
    } else {
        // PRIORITY 3: If no saved preference, and system prefers light
        themeToApply = 'light';
    }
    
    // Apply the theme class
    if (themeToApply === 'light') {
        // The 'dark-mode' class enables light mode styles via CSS
        document.body.classList.add('dark-mode'); 
    } else {
        // The absence of 'dark-mode' class enables dark mode styles (the default)
        document.body.classList.remove('dark-mode');
    }
    
    // Update the toggle button's text and icon to show the *next* action
    const isLightModeActive = document.body.classList.contains('dark-mode');
    
    if (toggleBtn) {
        if (isLightModeActive) {
            // Page is currently LIGHT, button should offer DARK
            toggleBtn.childNodes[0].src = 'images/dark.png';
            toggleBtn.childNodes[1].nodeValue = 'Dark';
        } else {
            // Page is currently DARK, button should offer LIGHT
            toggleBtn.childNodes[0].src = 'images/light.png';
            toggleBtn.childNodes[1].nodeValue = ' Light';
        }
    }
}

function submit() {
    alert("Form submitted!");
}


// Listener for window resizing
window.addEventListener('resize', checkAndShowMembersDiv);

// Listener for initial load (MODIFIED to apply theme first)
document.addEventListener('DOMContentLoaded', () => {
    // Apply theme preference (Saved OR System)
    applySavedTheme();        
    // Then run existing responsive checks
    checkAndShowMembersDiv(); 
});