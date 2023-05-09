<script lang="ts">
	import { page } from '$app/stores';
	import type { Doc } from '../types/doc';

	export let links: Doc[];

	const actions = links.filter((doc) => doc.category === 'action');
	const hooks = links.filter((doc) => doc.category === 'hook');

	$: active = $page.url.pathname;
</script>

<aside>
	<div class="group">
		<p><b>Getting started</b></p>
		<a class:active={active == '/docs/installation'} href="/docs/installation">Installtion</a>
	</div>
	<nav>
		<h2>Actions</h2>
		<ul class="group">
			{#each actions as action}
				<li><a class:active={active === action.slug} href={action.slug}>{action.name}</a></li>
			{/each}
		</ul>
		<h2>Hooks</h2>
		<ul class="group">
			{#each hooks as hook}
				<li><a class:active={active === hook.slug} href={hook.slug}>{hook.name}</a></li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	aside .group {
		margin-bottom: 1rem;
		padding-bottom: 1.5rem;
		border-bottom: 2px solid rgba(255, 255, 255, 0.2);
	}

	aside .group:last-child {
		border-bottom: none;
	}

	h2 {
		font-size: 1rem;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
