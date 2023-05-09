<script lang="ts">
	import '@/css/app.css';
	import '@/css/typography.css';
	import '@/css/variables.css';
	import Reference from '@components/Reference.svelte';
	import Sidebar from '@components/Sidebar.svelte';

	export let data;
</script>

<header>
	<a href="/"><h1>Svelte useActions</h1></a>
	<a href="/">Github</a>
</header>
<Sidebar links={data.slugs} />

<main>
	<div class="container">
		<slot />
	</div>
</main>
<Reference />

<style>
	header {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column: 1/4;
	}

	main {
		grid-column: 2/3;
		background-color: rgba(0, 0, 0, 0.1);
		padding: 1rem;
	}

	.container {
		max-width: 40rem;
	}
</style>
