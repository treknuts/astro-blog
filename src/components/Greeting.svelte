<script>
  export let messages;
  let greeting = messages[0];
  // Start with the first
  let currentIndex = 0;

  const randomize = () => {
    let newIndex = Math.floor(Math.random() * messages.length);

    console.log("Current index: ", currentIndex);
    if (newIndex === currentIndex) {
      newIndex++;
    }
    console.log("Selecting index: ", newIndex);
    currentIndex = newIndex;
    greeting = messages[newIndex];
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
