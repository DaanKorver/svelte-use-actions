import { escapeSvelte } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import shiki from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdSvexOptions = {
	extensions: ['.md'],
	rehypePlugins: [rehypeSlug],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({
				theme: 'one-dark-pro'
			});
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{ @html \`${html}\`}`;
		}
	}
};

export { mdSvexOptions };
