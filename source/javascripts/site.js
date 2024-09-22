// A function to change the navbar when scrolling
const changeNavbarWithScroll = () => {
  const navBar = document.getElementById('navbar2');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navBar.style.backgroundColor = 'white';
      navBar.style.borderBottom = '1px lightgrey solid';
    } else {
      navBar.style.backgroundColor = 'transparent';
      navBar.style.borderBottom = '0px';
    }
  });
};

changeNavbarWithScroll();

// Mobile menu toggle function
const toggleMobileMenu = () => {
  const navMenuButton = document.querySelector('.navbar-menu-mobile-button');
  navMenuButton.addEventListener('click', () => {
    const navMenu = document.querySelector('.navbar-menu-mobile');
    navMenu.classList.toggle('show-navbar-menu-mobile');
  });
};

toggleMobileMenu();
