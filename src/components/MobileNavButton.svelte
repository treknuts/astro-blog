<script>
  function handleClick() {
    document.querySelector(".nav-links").classList.toggle("expanded");
  }
</script>

<button id="hamburger" on:click={handleClick} aria-label="Navigation Button">
  <span class="line" />
  <span class="line" />
  <span class="line" />
</button>
