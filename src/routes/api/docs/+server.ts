import { json } from '@sveltejs/kit';
import type { Doc } from '../../../types/doc';

async function getDocSlugs() {
	const docs: Doc[] = [];

	const paths = import.meta.glob('/src/docs/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		let slug = path.split('/').at(-1)?.replace('.md', '');
		slug = `/docs/${slug}`;
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Doc, 'slug'>;
			const doc = { ...metadata, slug };
			docs.push(doc);
		}
	}

	return docs;
}

export async function GET() {
	const docs = await getDocSlugs();
	return json(docs);
}
