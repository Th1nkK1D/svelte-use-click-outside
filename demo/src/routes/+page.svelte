<script lang="ts">
  import { clickOutside } from 'svelte-use-click-outside'
  import { getExampleCode, getNpmCode } from '../lib/code';

  let count = $state(0)
</script>

<main>
  <h1>Svelte Use Click Outside</h1>

  <p>Zero dependency Svelte's action to handle click outside event</p>

  <div class="outside-object" use:clickOutside={() => count++}>
    Just click anywhere<br>outside me
  </div>

  <p>I've been clicked outside {count} times</p>

  <div>
    <a href="https://www.npmjs.com/package/svelte-use-click-outside">
      <img src="https://img.shields.io/npm/dm/svelte-use-click-outside" alt="NPM Downloads">
    </a>
    <a href="https://github.com/Th1nkK1D/svelte-use-click-outside">
      <img src="https://img.shields.io/github/stars/th1nkk1d/svelte-use-click-outside" alt="NPM Downloads">
    </a>
  </div>

  {#await getNpmCode() then html}
    {@html html}
  {/await}

  {#await getExampleCode() then html}
    {@html html}
  {/await}

  <footer>Made with 🩷 by Th1nkK1D - <a href="https://github.com/Th1nkK1D/svelte-use-click-outside">View source code on GitHub</a></footer>
</main>

<style>
  main {
    margin: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  .outside-object {
    padding: 24px;
    color: cyan;
    border: 2px dashed cyan;
    border-radius: 12px;
    margin: 24px 0;
    text-align: center;
    user-select: none;
  }

  footer {
    font-size: 14px;
  }
</style>