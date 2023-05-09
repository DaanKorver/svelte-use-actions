<script lang="ts">
	import { references } from '@/stores/ref.js';
	import { afterUpdate } from 'svelte';

	export let data;

	let ref: HTMLDivElement;
	let links: { title: string; href: string }[] = [];

	afterUpdate(() => {
		const headings = ref.querySelectorAll('h1, h2, h3, h4, h5');
		links = Array.from(headings).map((node) => ({
			title: node.innerHTML,
			href: `#${node.innerHTML.toLowerCase()}`
		}));
		references.set(links);
	});
</script>

<div bind:this={ref}>
	<svelte:component this={data.content} />
</div>

<style>
	div :global(pre) {
		padding: 0.5rem;
		border-radius: 5px;
	}

	div :global(a) {
		color: var(--accent);
	}
</style>
