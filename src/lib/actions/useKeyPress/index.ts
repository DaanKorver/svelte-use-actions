interface KeyPressOptions {
	event: 'keydown' | 'keypress' | 'keyup';
}

const defaultOptions: KeyPressOptions = {
	event: 'keydown'
};

interface IKeyPress {
	key: string;
	options?: KeyPressOptions;
}

export const keypress = (node: HTMLElement, params: IKeyPress) => {
	const { key, options } = params;
	const _options = { ...defaultOptions, ...options };
	const cb = (e: KeyboardEvent) => {
		if (e.key !== key) return;
		node.dispatchEvent(new CustomEvent('usekeypress'));
	};
	node.addEventListener(_options.event, cb);
	return {
		destroy() {
			node.removeEventListener(_options.event, cb);
		}
	};
};
