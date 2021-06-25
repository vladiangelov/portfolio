// A function to change the navbar
const changeNavbarWithScroll = () => {
  const navBar = document.getElementById(`navbar2`)
  document.addEventListener(`scroll`, (event) => {
    if (event.path[1][`scrollY`] > 0) {
      navBar.style.backgroundColor = `white`
      navBar.style.borderBottom = `1px lightgrey solid`
    } else {
      navBar.style.backgroundColor = `transparent`
      navBar.style.borderBottom = `0px`
    }
  })
}

changeNavbarWithScroll()

// Mobile menu open function

const toggleMobileMenu = () => {
  const navMenuButton = document.querySelector(`.navbar-menu-mobile-button`)
  navMenuButton.addEventListener(`click`, () => {
    const navMenu = document.querySelector(`.navbar-menu-mobile`)
    if (navMenu.classList.contains(`show-navbar-menu-mobile`)) {
      navMenu.classList.remove(`show-navbar-menu-mobile`)
    } else {
      navMenu.classList.add(`show-navbar-menu-mobile`)
    }
  })
}

toggleMobileMenu()
