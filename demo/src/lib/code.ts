import { codeToHtml } from 'shiki/bundle-web.mjs';

const theme = 'catppuccin-macchiato';

export const getNpmCode = () =>
  codeToHtml('npm i svelte-use-click-outside', {
    lang: 'bash',
    theme,
  });

export const getExampleCode = () =>
  codeToHtml(
    `<script>
  import { clickOutside } from 'svelte-use-click-outside'

  let count = $state(0)
</script>

<div class="outside-object" use:clickOutside={() => count++}>
  Just click anywhere outside me
</div>

<p>I've been clicked outside {count} times</p>`,
    {
      lang: 'svelte',
      theme,
    }
  );
