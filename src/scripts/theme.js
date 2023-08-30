var theme = (() => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
})();

if (theme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}

window.localStorage.setItem("theme", theme);

// from Astro docs
// const setDarkMode = () => {
//   if (localStorage.darkMode) {
//     document.documentElement.dataset.dark = '';
//   }
// };

// // Runs on initial navigation
// setDarkMode();
// // Runs on view transitions navigation
// document.addEventListener('astro:after-swap', setDarkMode);
