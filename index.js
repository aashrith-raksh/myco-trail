const navToggle = document.querySelector('[aria-controls="site-navigation"]');
navToggle.addEventListener("click", () => {
  navigationOpen = navToggle.getAttribute("aria-expanded");
  console.log(navigationOpen)

  if (navigationOpen === "true") {
    navToggle.setAttribute("aria-expanded", "false");
  } else {
    navToggle.setAttribute("aria-expanded", "true");
  }
});
