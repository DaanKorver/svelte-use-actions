import { writable, type Readable, get } from 'svelte/store';

export function useToggle(defaultValue?: boolean): [Readable<boolean>, () => void] {
	const value = defaultValue ?? false;
	const state = writable(value);
	const fakeStore = {
		subscribe: state.subscribe
	} as Readable<boolean>;
	const toggle = () => state.set(!get(state));
	return [fakeStore, toggle];
}
