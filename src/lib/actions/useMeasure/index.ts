export const measure = (node: HTMLElement) => {
	let observerEntry = null;
	const handler = (entries: ResizeObserverEntry[]) => {
		const { x, y, width, height, top, left, bottom, right } = entries[0].contentRect;
		observerEntry = { x, y, width, height, top, left, bottom, right };
		node.dispatchEvent(
			new CustomEvent('measure', {
				detail: {
					size: observerEntry
				}
			})
		);
	};
	const observer = new ResizeObserver(handler);
	observer.observe(node);
	return {
		destroy() {
			observerEntry = null;
			observer.disconnect();
		}
	};
};
