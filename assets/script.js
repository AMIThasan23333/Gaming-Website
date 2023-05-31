




const addEventOnElements = function (elements,evenType,callback) {

    for (let i = 0, len = elements.length; i<len; i++) {
         elements[i].addEventListener(evenType, callback);
        
    }
}

/* mobile navbar */

const navbar = document.querySelector("[data-navbar]");

const navToggler = document.querySelector("[data-nav-toggler]");

const navlinks = document.querySelectorAll("[data-nav-link]")


  const toggleNav = function () {

    navbar.classList.toggle("active");
    this.classList.toggle("active");

  }


  navToggler.addEventListener("click", toggleNav)




