import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const doc = await import(`../../../docs/${params.slug}.md`);
		return {
			content: doc.default
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
