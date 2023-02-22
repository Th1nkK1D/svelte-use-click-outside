export function clickOutside(
  node: HTMLElement,
  handler: () => void
): { destroy: () => void } {
  const onMouseDown = (event: MouseEvent) =>
    node &&
    !node.contains(event.target as HTMLElement) &&
    !event.defaultPrevented &&
    handler();

  document.addEventListener('mousedown', onMouseDown, true);

  return {
    destroy() {
      document.removeEventListener('mousedown', onMouseDown, true);
    },
  };
}
