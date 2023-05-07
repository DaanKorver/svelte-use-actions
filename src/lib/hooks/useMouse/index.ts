import { browser } from '$app/environment';
import { onDestroy, onMount } from 'svelte';
import { derived, writable } from 'svelte/store';

export function useMouse() {
	const mousePositions = writable({ x: 0, y: 0 });

	const onMouseMove = (e: MouseEvent) => {
		mousePositions.set({ x: e.clientX, y: e.clientY });
	};

	onMount(() => {
		window.addEventListener('mousemove', onMouseMove);
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('mousemove', onMouseMove);
		}
	});

	const x = derived(mousePositions, ($mousePositions, set) => {
		set($mousePositions.x);
	});

	const y = derived(mousePositions, ($mousePositions, set) => {
		set($mousePositions.y);
	});

	return { x, y };
}
