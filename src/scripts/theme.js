// from Astro docs
const setDarkMode = () => {
  var theme = "light";
  console.log(localStorage.getItem("theme"));
  if (localStorage.getItem("theme")) {
    console.log("Theme was defined! Got ", localStorage.getItem("theme"));
    theme = localStorage.getItem("theme");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("The theme was not set, but the user prefers dark mode");
    theme = "dark";
  } else {
    console.log("Defaulting to light mode.");
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
