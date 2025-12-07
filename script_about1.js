// Variable declarations at the top (can remain outside functions as they are constants)
const element1 = document.getElementById("about");
const element2 = document.getElementById("personal_about1");
const profile3 = document.getElementById("profile3");
const profile4 = document.getElementById("profile4");
const start = document.getElementById("start");
const rightside = document.getElementById("right_side");
const membersDiv = document.getElementById("members");
const toggleBtn = document.getElementById('darkModeToggle');


function hideAllProfiles() {
    element2.style.display = 'none'; // Personal image/details container
    profile3.style.display = 'none'; // Oh Kuan Qi profile
    profile4.style.display = 'none'; // Poon Chun Lok profile
}

/**
 * Toggles the display for Oh Kuan Qi's profile (profile3).
 * Now supports direct switching from another profile.
 */
function toggleContent3() {
    // Check if profile3 is currently displayed. If so, close it.
    const isProfile3Active = profile3.style.display === 'block';

    // 1. First, hide all specific profile content
    hideAllProfiles();

    if (isProfile3Active) {
        // If profile3 was already open, close it and revert to main view
        element1.style.display = 'inline-flex';
        start.style.display = 'flex'; 

        // Revert mobile layout if necessary
        if (window.innerWidth <= 850) {
            rightside.style.display = 'none';
        } else if (membersDiv) {
            membersDiv.style.display = 'flex';
        }

    } else {
        // If profile3 was closed (or another profile was open), show profile3

        // Show the new content structure
        element2.style.display = 'inline-flex';
        profile3.style.display = 'block';

        // Hide the main content area components
        element1.style.display = 'none';
        start.style.display = 'none';
        
        // Handle mobile layout: show right_side and hide members list
        if (window.innerWidth <= 850) {
            rightside.style.display = 'flex'; 
            if (membersDiv) {
                membersDiv.style.display = 'none'; 
            }
        }
    }
}


/**
 * Toggles the display for Poon Chun Lok's profile (profile4).
 * Now supports direct switching from another profile.
 */
function toggleContent4() {
    // Check if profile4 is currently displayed. If so, close it.
    const isProfile4Active = profile4.style.display === 'block';

    // 1. First, hide all specific profile content
    hideAllProfiles();

    if (isProfile4Active) {
        // If profile4 was already open, close it and revert to main view
        element1.style.display = 'inline-flex';
        start.style.display = 'flex'; 

        // Revert mobile layout if necessary
        if (window.innerWidth <= 850) {
            rightside.style.display = 'none';
        } else if (membersDiv) {
            membersDiv.style.display = 'flex';
        }

    } else {
        // If profile4 was closed (or another profile was open), show profile4

        // Show the new content structure
        element2.style.display = 'inline-flex';
        profile4.style.display = 'block'; // NOTE: Switched to profile4
        
        // Hide the main content area components
        element1.style.display = 'none';
        start.style.display = 'none';

        // Handle mobile layout: show right_side and hide members list
        if (window.innerWidth <= 850) {
            rightside.style.display = 'flex'; 
            if (membersDiv) {
                membersDiv.style.display = 'none'; 
            }
        }
    }
}

// ... (checkAndShowMembersDiv and other functions need an update too) ...

/**
 * Handles responsiveness on window resize and initial load.
 * Overrides mobile CSS rules when switching to desktop size (> 850px).
 * Updated to check for *both* profile3 and profile4 status.
 */
function checkAndShowMembersDiv() {
    // Determine if any profile is currently open
    const isAnyProfileOpen = profile3.style.display === 'block' || profile4.style.display === 'block'; 

    if (window.innerWidth > 850) {
        // --- Desktop View: Restore desktop layout ---

        // 1. Ensure right_side is visible (overrides mobile CSS display: none)
        rightside.style.display = 'flex'; 

        // 2. Ensure members div is visible (if it was hidden by mobile logic)
        if (membersDiv) {
             membersDiv.style.display = 'flex'; 
        }

    } else {
        // --- Mobile View: Enforce mobile layout rules ---
        
        // 1. If currently showing a profile, keep rightside visible
        if (isAnyProfileOpen) {
             rightside.style.display = 'flex';
             if (membersDiv) {
                 membersDiv.style.display = 'none'; // Keep member list hidden while profile is open
             }
        } else {
             // 2. Otherwise (on #start or #about), hide rightside to follow the @media CSS rule
             rightside.style.display = 'none';
             if (membersDiv) {
                 membersDiv.style.display = 'flex'; // Show member list (which is the main content on mobile)
             }
        }
    }
}


/**
 * Handles responsiveness on window resize and initial load.
 * Overrides mobile CSS rules when switching to desktop size (> 850px).
 */
function checkAndShowMembersDiv() {
    if (window.innerWidth > 850) {
        // --- Desktop View: Restore desktop layout ---

        // 1. Ensure right_side is visible (overrides mobile CSS display: none)
        rightside.style.display = 'flex'; 

        // 2. Ensure members div is visible (if it was hidden by mobile logic)
        if (membersDiv) {
             membersDiv.style.display = 'flex'; 
        }

    } else {
        // --- Mobile View: Enforce mobile layout rules ---
        
        // 1. If currently showing a profile (profile3 is block), keep rightside visible
        if (profile3.style.display === 'block') {
             rightside.style.display = 'flex';
             if (membersDiv) {
                 membersDiv.style.display = 'none'; // Keep member list hidden while profile is open
             }
        } else {
             // 2. Otherwise (on #start or #about), hide rightside to follow the @media CSS rule
             rightside.style.display = 'none';
             if (membersDiv) {
                 membersDiv.style.display = 'flex'; // Show member list (which is the main content on mobile)
             }
        }
    }
}

// 🍔 HAMBURGER MENU TOGGLE
function openMobileMenu() {
    const navLinks = document.getElementById("myNav1");
    // Target the image element using an ID or a specific selector
    const mobileMenuIcon = document.getElementById('mobileMenuIcon'); 
    
    // Define the paths to your icon images
    const menuIconSrc = 'images/menu.png';
    const closeIconSrc = 'images/close.png';
    
    navLinks.classList.toggle("mobile-open");

    // Swap the icon source
    if (navLinks.classList.contains("mobile-open")) {
        // Change the source to the close image
        mobileMenuIcon.src = closeIconSrc; 
        mobileMenuIcon.alt = 'Close';
    } else {
        // Change the source back to the menu image
        mobileMenuIcon.src = menuIconSrc;
        mobileMenuIcon.alt = 'Menu';
    }
}

// In script_about1.js:

function openContact() {
    const contactFormContainer = document.getElementById("contactform"); 
    // Target the image element directly by its ID
    const MenuIcon = document.getElementById('menuicon'); 
    // Target the text node within the link (it's the second child node of the <a> tag)
    // We get the parent <a> tag first, then find its text content node
    const fixedButtonLink = document.querySelector('#fixedbutton a');
    const buttonTextNode = fixedButtonLink.childNodes[1]; // Index 1 is the text node 'Contact Us'

    // Define the paths to your icon images
    const menuIconSrc = 'images/contact.png';
    const closeIconSrc = 'images/close.png';
    
    // Toggle the CSS class to show/hide the form container
    contactFormContainer.classList.toggle("contactform-open");

    // Swap the icon source and text based on the new class presence
    if (contactFormContainer.classList.contains("contactform-open")) {
        // Form is open, change the source to the close image and update text
        MenuIcon.src = closeIconSrc; 
        MenuIcon.alt = 'Close';
        buttonTextNode.nodeValue = 'Close'; // Update the text
    } else {
        // Form is closed, change the source back to the contact image and update text
        MenuIcon.src = menuIconSrc;
        MenuIcon.alt = 'Contact Us';
        buttonTextNode.nodeValue = 'Contact Us'; // Update the text
    }
}

// DARK MODE TOGGLE
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.childNodes[0].src = 'images/dark.png';
        toggleBtn.childNodes[1].nodeValue = 'Dark'; 
    } else {
        toggleBtn.childNodes[0].src = 'images/light.png';
        toggleBtn.childNodes[1].nodeValue = ' Light';
    }
});

function submit() {
    alert("Form submitted!");
}


// -----------------------------------------------------------
// 🌟 Event Listeners

// Listener for window resizing
window.addEventListener('resize', checkAndShowMembersDiv);

// Listener for initial load
document.addEventListener('DOMContentLoaded', checkAndShowMembersDiv);