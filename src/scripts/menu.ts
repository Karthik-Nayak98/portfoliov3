// Menu toggle functionality
export function initMenuToggle() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!isExpanded).toString());
    menu.classList.toggle("hidden");
  });
}
