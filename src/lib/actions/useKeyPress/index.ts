interface KeyPressOptions {
	event: 'keydown' | 'keypress' | 'keyup';
}

const defaultOptions: KeyPressOptions = {
	event: 'keydown'
};

interface IKeyPress {
	key: string;
	callback: () => void;
	options?: KeyPressOptions;
}

export const keypress = (node: HTMLElement, params: IKeyPress) => {
	const { key, callback, options } = params;
	const _options = { ...defaultOptions, ...options };
	const cb = (e: KeyboardEvent) => {
		if (e.key !== key) return;
		callback();
	};
	node.addEventListener(_options.event, cb);
	return {
		destroy() {
			node.removeEventListener(_options.event, cb);
		}
	};
};
