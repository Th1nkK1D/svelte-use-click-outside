export function clickOutside(node: HTMLElement, handler: () => void): { destroy: () => void } {
	let pointerDownStartedInside = false;

	const onPointerDown = (event: PointerEvent) => {
		if (node && node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			// Set our flag to True if the pointer started from within the node.
			// This is needed to prevent regular `pointerup` event from triggering the handler
			pointerDownStartedInside = true;
		}
	};

	const onPointerUp = (event: PointerEvent) => {
		if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			if (pointerDownStartedInside) {
			} else {
				handler();
			}
		}

		// Reset the flag
		pointerDownStartedInside = false;
	};

	document.addEventListener('pointerup', onPointerUp, true);
	document.addEventListener('pointerdown', onPointerDown, true);

	return {
		destroy() {
			document.removeEventListener('pointerup', onPointerUp, true);
			document.removeEventListener('pointerdown', onPointerDown, true);
		}
	};
}
