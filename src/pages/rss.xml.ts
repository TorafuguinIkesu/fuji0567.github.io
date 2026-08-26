import rss from '@astrojs/rss';
import { getPublishedPosts } from '../lib/posts';

export async function GET(context: { site: URL }) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'FUJI 0567',
    description: 'FUJI 0567 の個人ブログ。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
