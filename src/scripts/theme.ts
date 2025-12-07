// Immediately set theme class before page renders
(function () {
  const theme = localStorage.getItem("theme");
  if (
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

// Toggle between light and dark mode
export function toggleTheme() {
  const html = document.documentElement;
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
    html.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    html.classList.add("dark");
  }
}
