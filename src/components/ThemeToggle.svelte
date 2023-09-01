<script>
  let isDark;

  function onMount() {
    isDark = window.localStorage.theme === "dark" ? true : false;
  }

  function handleToggleClick() {
    const element = document.documentElement;
    isDark = element.dataset.theme === "dark";

    if (isDark) {
      localStorage.setItem("theme", "light");
      element.dataset.theme = "light";
    } else {
      localStorage.setItem("theme", "dark");
      element.dataset.theme = "dark";
    }
  }
</script>

<button
  id="themeToggle"
  on:click={handleToggleClick}
  aria-label="Theme toggle button"
>
  <i class="fa-solid fa-sun fa-2x" />
  <i class="fa-solid fa-moon fa-2x" />
</button>
