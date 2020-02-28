// A function to change the navbar
changeNavbarWithScroll = () => {
  const navBar = document.getElementById('navbar2');
  document.addEventListener("scroll", (event) => {
    if (event.path[1]["scrollY"] > 0) {
      navBar.style.backgroundColor = "white";
      navBar.style.borderBottom = "1px lightgrey solid";
    } else {
      navBar.style.backgroundColor = "transparent";
      navBar.style.borderBottom = "0px";
    };
  })
};

changeNavbarWithScroll();

// Mobile menu open function

openMobileMenu = () => {
  const navMenuButton = document.querySelector('.navbar-menu-mobile-button')
  navMenuButton.addEventListener("click", (event) => {
    const navMenu = document.querySelector('.navbar-menu-mobile')
    if (navMenu.style.display === "none") {
      navMenu.style.display = "block";
    } else {
      navMenu.style.display = "none";
    }
  });

}

openMobileMenu();
