export async function load({ fetch }) {
	const response = await fetch('/api/docs');
	const slugs = await response.json();
	return { slugs };
}
