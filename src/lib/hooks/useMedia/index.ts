import { browser } from '$app/environment';
import { readable } from 'svelte/store';

const getInitialState = (query: string, defaultState?: boolean) => {
	if (defaultState !== undefined) {
		return defaultState;
	}

	if (browser) {
		return window.matchMedia(query).matches;
	}

	return false;
};

const setup = (query: string) => (set: (this: void, value: boolean) => void) => {
	if (browser) {
		const q = window.matchMedia(query);
		const callback = (e: MediaQueryListEvent) => set(e.matches);
		q.addEventListener('change', callback);

		return () => q.removeEventListener('change', callback);
	}
};

export function useMedia(query: string, defaultState?: boolean) {
	const media = readable(getInitialState(query, defaultState), setup(query));
	return media;
}
