
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


  const navClose = () => {
    navbar.classList.remove("active");
    navToggler.classList.remove("active")

  }

  addEventOnElements(navlinks, "click", navClose)



  const header = document.querySelector("[data-header]");
  const activeEl = function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }
  window.addEventListener("scroll", activeEl);
  
  


