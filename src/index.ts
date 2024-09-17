export function clickOutside(
  node: HTMLElement,
  handler: () => void
): { destroy: () => void } {
  let pointerDownStartedInside = false;

  const onPointerDown = (event: PointerEvent) => {
    if (
      !event.defaultPrevented &&
      node?.contains(event.target as HTMLElement)
    ) {
      pointerDownStartedInside = true;
    }
  };

  const onPointerUp = (event: PointerEvent) => {
    if (
      !event.defaultPrevented &&
      !pointerDownStartedInside &&
      node &&
      !node.contains(event.target as HTMLElement)
    ) {
      handler();
    }

    pointerDownStartedInside = false;
  };

  document.addEventListener('pointerup', onPointerUp, true);
  document.addEventListener('pointerdown', onPointerDown, true);

  return {
    destroy() {
      document.removeEventListener('pointerup', onPointerUp, true);
      document.removeEventListener('pointerdown', onPointerDown, true);
    },
  };
}
