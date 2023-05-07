export const intersection = (node: HTMLElement, options?: IntersectionObserverInit) => {
	let observerEntry = null;
	const handler = (entries: IntersectionObserverEntry[]) => {
		observerEntry = entries[0];
		node.dispatchEvent(
			new CustomEvent<{ element: IntersectionObserverEntry }>('intersect', {
				detail: {
					element: observerEntry
				}
			})
		);
	};

	const observer = new IntersectionObserver(handler, options);
	observer.observe(node);

	return {
		destroy() {
			observerEntry = null;
			observer.disconnect();
		}
	};
};
