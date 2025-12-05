// Variable declarations at the top (can remain outside functions as they are constants)
const element1 = document.getElementById("about");
const element2 = document.getElementById("personal_about1");
const profile3 = document.getElementById("profile3");
const start = document.getElementById("start");
const rightside = document.getElementById("right_side");
const membersDiv = document.getElementById("members");
const toggleBtn = document.getElementById('darkModeToggle');


/**
 * Toggles the display between the main #about/#start view and the individual #personal_about/profile views.
 * Triggered by member buttons (e.g., Oh Kuan Qi).
 */
function toggleContent3() {
    // Determine the action: Show personal_about (true) or Hide personal_about (false)
    const isShowingPersonalAbout = element2.style.display === 'none' || element2.style.display === '';

    if (isShowingPersonalAbout) {
        // --- Logic to SHOW personal_about / profile3 ---
        
        // 1. If on mobile, override CSS and show #right_side, and hide the member list.
        if (window.innerWidth <= 850) {
            rightside.style.display = 'flex'; 
            if (membersDiv) {
                membersDiv.style.display = 'none'; 
            }
        }
        
        // 2. Show the new content structure
        element2.style.display = 'inline-flex';
        profile3.style.display = 'block';

        // 3. Hide the main content area components
        element1.style.display = 'none';
        start.style.display = 'none';

    } else {
        // --- Logic to HIDE personal_about / profile3 and revert to #about / #start ---

        // 1. Hide the personal views
        element2.style.display = 'none';
        profile3.style.display = 'none';

        // 2. Revert to default structure
        element1.style.display = 'inline-flex';
        start.style.display = 'flex'; 
        
        // 3. On Mobile, hide #right_side again to follow the @media CSS rule
        if (window.innerWidth <= 850) {
            rightside.style.display = 'none';
        } else {
            // 4. On Desktop, ensure membersDiv is visible (in case it was hidden)
            if (membersDiv) {
                membersDiv.style.display = 'flex';
            }
        }
    }
}

function toggleContent4() {
    // Determine the action: Show personal_about (true) or Hide personal_about (false)
    const isShowingPersonalAbout = element2.style.display === 'none' || element2.style.display === '';

    if (isShowingPersonalAbout) {
        // --- Logic to SHOW personal_about / profile3 ---
        
        // 1. If on mobile, override CSS and show #right_side, and hide the member list.
        if (window.innerWidth <= 850) {
            rightside.style.display = 'flex'; 
            if (membersDiv) {
                membersDiv.style.display = 'none'; 
            }
        }
        
        // 2. Show the new content structure
        element2.style.display = 'inline-flex';
        profile3.style.display = 'block';

        // 3. Hide the main content area components
        element1.style.display = 'none';
        start.style.display = 'none';

    } else {
        // --- Logic to HIDE personal_about / profile3 and revert to #about / #start ---

        // 1. Hide the personal views
        element2.style.display = 'none';
        profile3.style.display = 'none';

        // 2. Revert to default structure
        element1.style.display = 'inline-flex';
        start.style.display = 'flex'; 
        
        // 3. On Mobile, hide #right_side again to follow the @media CSS rule
        if (window.innerWidth <= 850) {
            rightside.style.display = 'none';
        } else {
            // 4. On Desktop, ensure membersDiv is visible (in case it was hidden)
            if (membersDiv) {
                membersDiv.style.display = 'flex';
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

// DARK MODE TOGGLE
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        if (iconSpan) {
            iconSpan.textContent = 'dark_mode';
        }
        // Using index 1 as confirmed by you
        toggleBtn.childNodes[1].nodeValue = ' Dark'; 
    } else {
        if (iconSpan) {
            iconSpan.textContent = 'sunny';
        }
        // Using index 1 as confirmed by you
        toggleBtn.childNodes[1].nodeValue = ' Light';
    }
});


// -----------------------------------------------------------
// 🌟 Event Listeners

// Listener for window resizing
window.addEventListener('resize', checkAndShowMembersDiv);

// Listener for initial load
document.addEventListener('DOMContentLoaded', checkAndShowMembersDiv);