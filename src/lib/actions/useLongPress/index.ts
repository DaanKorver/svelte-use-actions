export function longpress(node: HTMLElement, duration = 1000) {
	let timer: ReturnType<typeof setTimeout>;

	const handleMousedown = () => {
		timer = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, duration);
	};

	const handleMouseup = () => {
		clearTimeout(timer);
	};

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseup', handleMouseup);

	return {
		update(newDuration: number) {
			duration = newDuration;
		},
		destroy() {
			clearTimeout(timer);
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
		}
	};
}
