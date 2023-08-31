// from Astro docs
const setDarkMode = () => {
  var theme = "light";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  }

  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  window.localStorage.setItem("theme", theme);
};

// Runs on initial navigation
setDarkMode();
// Runs on view transitions navigation
document.addEventListener("astro:after-swap", setDarkMode);
