    var navLinks = document.getElementById("navLinks");

    function showMenu(){
      navLinks.style.right = "0";
    }

    function hideMenu(){
      navLinks.style.right = "-200px";
    }

    // Close mobile menu when link is clicked
    var links = document.querySelectorAll('.nav-links ul li a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hideMenu();
      });
    });