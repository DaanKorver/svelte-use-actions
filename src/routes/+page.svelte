<script lang="ts">
	import { intersection, keypress, longpress, measure, useMedia } from '../lib/index.js';
	const isMobile = useMedia('(min-width: 480px)');

	// $: console.log($isMobile);

	function askPerm() {
		// const state = usePermission({ name: 'geolocation' });
		navigator.permissions.query({ name: 'notifications' }).then((status) => {
			console.log(status);
		});
		// console.log(get(state));
	}
</script>

<svelte:window use:keypress={{ key: 'Escape', callback: () => console.log('pressed escape') }} />

<div>useMedia</div>
<div class="filler" />
<button on:click={askPerm}>perm</button>

<button use:longpress on:longpress={() => alert('you pressed me for 2 seconds, good')}>
	longpress me
</button>

<div
	class="observable"
	use:intersection={{ threshold: 0.5 }}
	on:intersect={(e) => console.log(e.detail.element)}
	use:measure
	on:measure={(e) => {
		console.log(e.detail.size);
	}}
>
	<p>observe me</p>
</div>

<style>
	.filler {
		height: 100vh;
	}

	.observable {
		height: 50vh;
		background-color: red;
	}

	button {
		padding: 0.5rem 1.5rem;
		background-color: #1a1a1a;
		color: #fff;
		display: inline-block;
		cursor: pointer;
	}

	button:active {
		transform: scale(0.95);
	}
</style>
