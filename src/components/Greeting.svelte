<script>
  export let messages;
  let greeting = messages[0];

  const randomize = () => {
    greeting = messages[Math.floor(Math.random() * messages.length)];
  };
</script>

<h2>{greeting}!</h2>
<p>Not feeling that greeting?</p>
<button on:click={randomize}>Try a new one!</button>

<style>
  button {
    border: none;
    font-size: 1.15rem;
    padding: 1em 0.5em;
    border-radius: 0.25em;
    background-color: var(--primary);
    color: var(--text);
    transition: scale 250ms ease;
    cursor: pointer;
    transition: box-shadow 150ms ease;
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
</style>
