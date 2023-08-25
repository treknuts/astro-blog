<script>
  export let messages;
  let greeting = messages[0];

  const randomize = () => {
    greeting = messages[Math.floor(Math.random() * messages.length)];
  };
</script>

<div class="greeting">
  <h1>{greeting}!</h1>
  <button on:click={randomize} aria-label="Randomize greeting button"
    >Randomize Greeting!</button
  >
</div>

<style>
  .greeting {
    background-color: var(--secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 3em;
    border-radius: 2em;
  }

  .greeting h1 {
    margin-bottom: 0.5em;
  }

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
