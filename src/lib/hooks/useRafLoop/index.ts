import { browser } from '$app/environment';
import { readable } from 'svelte/store';

export type RafLoopReturns = [() => void, () => void, () => boolean];

export const useRafLoop = (callback: FrameRequestCallback) => {
	return;
	// return readable(0, (set) => {
	// 	if (browser) {
	// 		let rafActivity = false;
	// 		let raf: null | number = null;
	// 		const step = (time: number) => {
	// 			if (rafActivity) {
	// 				callback(time);
	// 				raf = requestAnimationFrame(step);
	// 			}
	// 		};

	// 		const _hooks = [
	// 			// stop
	// 			() => {
	// 				if (rafActivity) {
	// 					rafActivity = false;
	// 					raf && cancelAnimationFrame(raf);
	// 				}
	// 			},
	// 			// start
	// 			() => {
	// 				if (!rafActivity) {
	// 					rafActivity = true;
	// 					console.log('starting');

	// 					raf = requestAnimationFrame(step);
	// 				}
	// 			},
	// 			(): boolean => rafActivity
	// 		] as RafLoopReturns;
	// 	}
	// });
};
