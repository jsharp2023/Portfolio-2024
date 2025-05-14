function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Optional: Toggle aria-expanded for accessibility
  const expanded = icon.getAttribute("aria-expanded") === "true";
  icon.setAttribute("aria-expanded", !expanded);
}
