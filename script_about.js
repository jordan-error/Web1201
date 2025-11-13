//Scroll to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function image() {
                var element = document.body;
                var icon = document.getElementById("themeIcon");

                element.classList.toggle("dark-mode");
                if (element.classList.contains("dark-mode")) {
                    icon.src = "images/dark.png"; 
                    element.style.transition = "all 0.3s";

                } else {
                    icon.src = "images/bright.png"; 
                    element.style.transition = "all 0.3s";
                }
            }

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
    mybutton.style.display = "block";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
  }
}
mybutton.addEventListener('click', topFunction);

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleNav() {
        var x = document.getElementById("myNav");
        if (x.className === "nav") {
            // When icon is clicked, change class to "nav responsive"
            x.className += " responsive";
        } else {
            // When icon is clicked again, change class back to "nav"
            x.className = "nav";
        }

        var y = document.getElementById("myNav1");
        if (y.className === "right") {
            // When icon is clicked, change class to "nav responsive"
            y.className += " responsive1";
        } else {
            // When icon is clicked again, change class back to "nav"
            y.className = "right";
        }
}

document.addEventListener('click', function(event) {
        var navContainer = document.getElementById('myNav');
        var navContainer1 = document.getElementById('myNav1');
        
        // Check if the main navigation is currently open
        if (navContainer && navContainer.classList.contains("responsive")) {
            
            // 1. Check if the click happened OUTSIDE the navigation container
            // event.target is the specific element that was clicked
            // navContainer.contains(event.target) checks if the clicked element is inside the nav
            if (!navContainer.contains(event.target)) {
                
                // 2. Add an exception: Do NOT close if the clicked element is the hamburger icon itself (to prevent conflicts)
                // The hamburger icon is usually the anchor with class 'icon'
                var isIcon = event.target.classList.contains('icon') || event.target.parentElement.classList.contains('icon');

                if (!isIcon) {
                    // Close the main menu
                    navContainer.classList.remove("responsive");
                    navContainer1.classList.remove("responsive1");

                    // Hide any active dropdowns (About section)
                    var openDropdown = navContainer.querySelector('.dropdown.active');
                    if (openDropdown) {
                        openDropdown.classList.remove('active');
                    }
                }
            }
        }
    });

function toggleContent3() {
    var element = document.body;
    const contentDiv = document.getElementById('article');
    const contentDiv2 = document.getElementById('start');
    const contentDiv3 = document.getElementById('about');
    const contentDiv4 = document.getElementById('personal_about3');
    const button3 = document.getElementById('mem_button3');

    // 2. Check the current display style
    if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
        // If it's hidden (or no style set), show it as a block element
        contentDiv.style.display = 'block';
        contentDiv.style.opacity = 1;
        contentDiv2.style.display = 'none';
        contentDiv2.style.opacity = 0;
        contentDiv3.style.display = 'none';
        contentDiv3.style.opacity = 0;
        contentDiv4.style.display = 'block';
        contentDiv4.style.opacity = 1;
        button3.style.backgroundColor = 'rgb(190, 190, 190)';
        button3.style.borderColor = 'rgb(190, 190, 190)';
    } else {
        // Otherwise, hide it
        contentDiv.style.display = 'none';
        contentDiv.style.opacity = 0;
        contentDiv2.style.display = 'block';
        contentDiv2.style.opacity = 1;
        contentDiv3.style.display = 'block';
        contentDiv3.style.opacity = 1;        
        contentDiv4.style.display = 'none';
        contentDiv4.style.opacity = 0;
        button3.style.backgroundColor = '';
        button3.style.borderColor = '';
    }
}

// NOTE: Set the initial display state in the script to ensure it's hidden on load
// (This is an alternative to setting it in CSS, but recommended for clean JS toggling)
document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('article');
    const contentDiv2 = document.getElementById('start');
});
    
//Popup for box1
var modal1 = document.getElementById("content1");

var btn = document.getElementById("box1");

var span1 = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
  modal1.style.display = "block";
    setTimeout(function() {
    modal1.classList.add('is-active');
  }, 10);
}

span1.onclick = function() {
  modal1.style.display = "none";
  modal1.classList.remove('is-active');
}

//Popup for box2
var modal2 = document.getElementById("content2");

var btn = document.getElementById("box2");

var span2 = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
  modal2.style.display = "block";
    setTimeout(function() {
    modal2.classList.add('is-active');
  }, 10);
}

span2.onclick = function() {
  modal2.style.display = "none";
  modal2.classList.remove('is-active');
}

//Popup for box3
var modal3 = document.getElementById("content3");

var btn = document.getElementById("box3");

var span3 = document.getElementsByClassName("close3")[0];

btn.onclick = function() {
  modal3.style.display = "block";
    setTimeout(function() {
    modal3.classList.add('is-active');
  }, 10);
}

span3.onclick = function() {
  modal3.style.display = "none";
  modal3.classList.remove('is-active');
}

//Popup for box4
var modal4 = document.getElementById("content4");

var btn = document.getElementById("box4");

var span4 = document.getElementsByClassName("close4")[0];

btn.onclick = function() {
  modal4.style.display = "block";
    setTimeout(function() {
    modal4.classList.add('is-active');
  }, 10);
}

span4.onclick = function() {
  modal4.style.display = "none";
  modal4.classList.remove('is-active');
}

//Popup for box5
var modal5 = document.getElementById("content5");

var btn = document.getElementById("box5");

var span5 = document.getElementsByClassName("close5")[0];

btn.onclick = function() {
  modal5.style.display = "block";
    setTimeout(function() {
    modal5.classList.add('is-active');
  }, 10);
}

span5.onclick = function() {
  modal5.style.display = "none";
  modal5.classList.remove('is-active');
}

//Popup for box6
var modal6 = document.getElementById("content6");

var btn = document.getElementById("box6");

var span6 = document.getElementsByClassName("close6")[0];

btn.onclick = function() {
  modal6.style.display = "block";
    setTimeout(function() {
    modal6.classList.add('is-active');
  }, 10);
}

span6.onclick = function() {
  modal6.style.display = "none";
  modal6.classList.remove('is-active');
}

//Popup for box7
var modal7 = document.getElementById("content7");

var btn = document.getElementById("box7");

var span7 = document.getElementsByClassName("close7")[0];

btn.onclick = function() {
  modal7.style.display = "block";
    setTimeout(function() {
    modal7.classList.add('is-active');
  }, 10);
}

span7.onclick = function() {
  modal7.style.display = "none";
  modal7.classList.remove('is-active');
}

//Popup for box8
var modal8 = document.getElementById("content8");

var btn = document.getElementById("box8");

var span8 = document.getElementsByClassName("close8")[0];

btn.onclick = function() {
  modal8.style.display = "block";
    setTimeout(function() {
    modal8.classList.add('is-active');
  }, 10);
}

span8.onclick = function() {
  modal8.style.display = "none";
  modal8.classList.remove('is-active');
}

//Popup for box9
var modal9 = document.getElementById("content9");

var btn = document.getElementById("box9");

var span9 = document.getElementsByClassName("close9")[0];

btn.onclick = function() {
  modal9.style.display = "block";
    setTimeout(function() {
    modal9.classList.add('is-active');
  }, 10);
}

span9.onclick = function() {
  modal9.style.display = "none";
  modal9.classList.remove('is-active');
}

//Popup for box10
var modal10 = document.getElementById("content10");

var btn = document.getElementById("box10");

var span10 = document.getElementsByClassName("close10")[0];

btn.onclick = function() {
  modal10.style.display = "block";
    setTimeout(function() {
    modal10.classList.add('is-active');
  }, 10);
}

span10.onclick = function() {
  modal10.style.display = "none";
  modal10.classList.remove('is-active');
}

//Popup for box11
var modal11 = document.getElementById("content11");

var btn = document.getElementById("box11");

var span11 = document.getElementsByClassName("close11")[0];

btn.onclick = function() {
  modal11.style.display = "block";
    setTimeout(function() {
    modal11.classList.add('is-active');
  }, 10);
}

span11.onclick = function() {
  modal11.style.display = "none";
  modal11.classList.remove('is-active');
}

//Popup for box12
var modal12 = document.getElementById("content12");

var btn = document.getElementById("box12");

var span12 = document.getElementsByClassName("close12")[0];

btn.onclick = function() {
  modal12.style.display = "block";
    setTimeout(function() {
    modal12.classList.add('is-active');
  }, 10);
}

span12.onclick = function() {
  modal12.style.display = "none";
  modal12.classList.remove('is-active');
}

//Popup for box13
var modal13 = document.getElementById("content13");

var btn = document.getElementById("box13");

var span13 = document.getElementsByClassName("close13")[0];

btn.onclick = function() {
  modal13.style.display = "block";
    setTimeout(function() {
    modal13.classList.add('is-active');
  }, 10);
}

span13.onclick = function() {
  modal13.style.display = "none";
  modal13.classList.remove('is-active');
}

//Popup for box14
var modal14 = document.getElementById("content14");

var btn = document.getElementById("box14");

var span14 = document.getElementsByClassName("close14")[0];

btn.onclick = function() {
  modal14.style.display = "block";
    setTimeout(function() {
    modal14.classList.add('is-active');
  }, 10);
}

span14.onclick = function() {
  modal14.style.display = "none";
  modal14.classList.remove('is-active');
}

//Popup for box15
var modal15 = document.getElementById("content15");

var btn = document.getElementById("box15");

var span15 = document.getElementsByClassName("close15")[0];

btn.onclick = function() {
  modal15.style.display = "block";
    setTimeout(function() {
    modal15.classList.add('is-active');
  }, 10);
}

span15.onclick = function() {
  modal15.style.display = "none";
  modal15.classList.remove('is-active');
}

//Popup for box16
var modal16 = document.getElementById("content16");

var btn = document.getElementById("box16");

var span16 = document.getElementsByClassName("close16")[0];

btn.onclick = function() {
  modal16.style.display = "block";
    setTimeout(function() {
    modal16.classList.add('is-active');
  }, 10);
}

span16.onclick = function() {
  modal16.style.display = "none";
  modal16.classList.remove('is-active');
}

//Popup for box17
var modal17 = document.getElementById("content17");

var btn = document.getElementById("box17");

var span17 = document.getElementsByClassName("close17")[0];

btn.onclick = function() {
  modal17.style.display = "block";
    setTimeout(function() {
    modal17.classList.add('is-active');
  }, 10);
}

span17.onclick = function() {
  modal17.style.display = "none";
  modal17.classList.remove('is-active');
}

//Popup for box18
var modal18 = document.getElementById("content18");

var btn = document.getElementById("box18");

var span18 = document.getElementsByClassName("close18")[0];

btn.onclick = function() {
  modal18.style.display = "block";
    setTimeout(function() {
    modal18.classList.add('is-active');
  }, 10);
}

span18.onclick = function() {
  modal18.style.display = "none";
  modal18.classList.remove('is-active');
}

//Popup for box19
var modal19 = document.getElementById("content19");

var btn = document.getElementById("box19");

var span19 = document.getElementsByClassName("close19")[0];

btn.onclick = function() {
  modal19.style.display = "block";
    setTimeout(function() {
    modal19.classList.add('is-active');
  }, 10);
}

span19.onclick = function() {
  modal19.style.display = "none";
  modal19.classList.remove('is-active');
}

//Popup for box20
var modal20 = document.getElementById("content20");

var btn = document.getElementById("box20");

var span20 = document.getElementsByClassName("close20")[0];

btn.onclick = function() {
  modal20.style.display = "block";
    setTimeout(function() {
    modal20.classList.add('is-active');
  }, 10);
}

span20.onclick = function() {
  modal20.style.display = "none";
  modal20.classList.remove('is-active');
}

//Popup for box21
var modal21 = document.getElementById("content21");

var btn = document.getElementById("box21");

var span21 = document.getElementsByClassName("close21")[0];

btn.onclick = function() {
  modal21.style.display = "block";
    setTimeout(function() {
    modal21.classList.add('is-active');
  }, 10);
}

span21.onclick = function() {
  modal21.style.display = "none";
  modal21.classList.remove('is-active');
}

//Popup for box22
var modal22 = document.getElementById("content22");

var btn = document.getElementById("box22");

var span22 = document.getElementsByClassName("close22")[0];

btn.onclick = function() {
  modal22.style.display = "block";
    setTimeout(function() {
    modal22.classList.add('is-active');
  }, 10);
}

span22.onclick = function() {
  modal22.style.display = "none";
  modal22.classList.remove('is-active');
}

window.onclick = function(event) {
  // Check for modal1
  if (modal1 && event.target === modal1) {
    modal1.style.display = "none";
    modal1.classList.remove('is-active');
  }
  
  // Check for modal2
  if (modal2 && event.target === modal2) {
    modal2.style.display = "none";
    modal2.classList.remove('is-active');
  }
  
  // Check for modal3
  if (modal3 && event.target === modal3) {
    modal3.style.display = "none";
    modal3.classList.remove('is-active');
  }

  // Check for modal4
  if (modal4 && event.target === modal4) {
    modal4.style.display = "none";
    modal4.classList.remove('is-active');
  }

  // Check for modal5
  if (modal5 && event.target === modal5) {
    modal5.style.display = "none";
    modal5.classList.remove('is-active');
  }

  // Check for modal6
  if (modal6 && event.target === modal6) {
    modal6.style.display = "none";
    modal6.classList.remove('is-active');
  }

  // Check for modal7
  if (modal7 && event.target === modal7) {
    modal7.style.display = "none";
    modal7.classList.remove('is-active');
  }

  // Check for modal8
  if (modal8 && event.target === modal8) {
    modal8.style.display = "none";
    modal8.classList.remove('is-active');
  }

  // Check for modal9
  if (modal9 && event.target === modal9) {
    modal9.style.display = "none";
    modal9.classList.remove('is-active');
  }

  // Check for modal10
  if (modal10 && event.target === modal10) {
    modal10.style.display = "none";
    modal10.classList.remove('is-active');
  }

  // Check for modal11
  if (modal11 && event.target === modal11) {
    modal11.style.display = "none";
    modal11.classList.remove('is-active');
  }

  // Check for modal12
  if (modal12 && event.target === modal12) {
    modal12.style.display = "none";
    modal12.classList.remove('is-active');
  }

  // Check for modal13
  if (modal13 && event.target === modal13) {
    modal13.style.display = "none";
    modal13.classList.remove('is-active');
  }

  // Check for modal14
  if (modal14 && event.target === modal14) {
    modal14.style.display = "none";
    modal14.classList.remove('is-active');
  }

  // Check for modal15
  if (modal15 && event.target === modal15) {
    modal15.style.display = "none";
    modal15.classList.remove('is-active');
  }

  // Check for modal16
  if (modal16 && event.target === modal16) {
    modal16.style.display = "none";
    modal16.classList.remove('is-active');
  }

  // Check for modal17
  if (modal17 && event.target === modal17) {
    modal17.style.display = "none";
    modal17.classList.remove('is-active');
  }

  // Check for modal18
  if (modal18 && event.target === modal18) {
    modal18.style.display = "none";
    modal18.classList.remove('is-active');
  }

  // Check for modal19
  if (modal19 && event.target === modal19) {
    modal19.style.display = "none";
    modal19.classList.remove('is-active');
  }

  // Check for modal20
  if (modal20 && event.target === modal20) {
    modal20.style.display = "none";
    modal20.classList.remove('is-active');
  }

  // Check for modal21
  if (modal21 && event.target === modal21) {
    modal21.style.display = "none";
    modal21.classList.remove('is-active');
  }

  // Check for modal22
  if (modal22 && event.target === modal22) {
    modal22.style.display = "none";
    modal22.classList.remove('is-active');
  }
};