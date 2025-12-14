import { getArticleBySlug } from '../lib/markdown';

export default async function HomePage() {
  const article = await getArticleBySlug('welcome');

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content || '' }} />
    </div>
  );
}
