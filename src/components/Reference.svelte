<script>
	import { references } from '@/stores/ref';
</script>

{#if $references.length}
	<div>
		<h3>On this page</h3>
		<ul>
			{#each $references as reference}
				<li><a href={reference.href}>{reference.title}</a></li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
