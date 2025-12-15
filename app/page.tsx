import { getArticleBySlug } from '../lib/markdown';

export default async function HomePage() {
  const article = await getArticleBySlug('welcome');

  if (!article) {
    return <div className="text-center text-neutral-light">Article not found.</div>;
  }

  return (
    <article className="prose lg:prose-xl max-w-none">
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content || '' }} />
    </article>
  );
}
