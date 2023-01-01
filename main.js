let mobileSideNavigationOverlay = document.getElementById(
  "mobile-side-navigation-overlay"
);
let responsiveMenuCloseButton = document
  .getElementById("responsive-menu-close-button")
  .addEventListener("click", function () {
    mobileSideNavigationOverlay.classList.remove("show");
  });
let responsiveMenuOpenButton = document
  .getElementById("responsive-menu-open-button")
  .addEventListener("click", function () {
    mobileSideNavigationOverlay.classList.add("show");
  });
