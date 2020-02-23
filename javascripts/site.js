// This is where it all goes :)
changeNavbarWithScroll = () => {
  const navigation_vladi = document.getElementById('navbar2');
  document.addEventListener("scroll", (event) => {
    if (event.path[1]["scrollY"] > 0) {
      navigation_vladi.style.backgroundColor = "white";
      navigation_vladi.style.borderBottom = "1px lightgrey solid";
    } else {
      navigation_vladi.style.backgroundColor = "transparent";
      navigation_vladi.style.borderBottom = "0px";
    };
  })
};

changeNavbarWithScroll();
