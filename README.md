# svelte-use-click-outside

Zero dependency [Svelte's action](https://svelte.dev/docs#use_action) to handle click outside event

## Installation

```
npm -i svelte-use-click-outside
```

## Usage

```svelte
<script>
  import { clickOutside } from 'svelte-use-click-outside';

  function clickOutsideHandler() {
    // handler logic
  }
</script>

<div use:clickOutside={clickOutsideHandler} />
```

Inspired by https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783
