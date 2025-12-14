// lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Article } from '../types/article';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(contentDirectory, 'articles', `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    publicationDate: data.publicationDate as string,
    excerpt: data.excerpt as string | undefined,
    coverImage: data.coverImage as string | undefined,
    content: contentHtml,
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const articlesPath = path.join(contentDirectory, 'articles');
  const fileNames = fs.readdirSync(articlesPath);

  const allArticles = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        publicationDate: data.publicationDate as string,
        excerpt: data.excerpt as string | undefined,
        coverImage: data.coverImage as string | undefined,
      };
    })
  );

  // Sort articles by date in descending order
  return allArticles.sort((a, b) => {
    if (a.publicationDate < b.publicationDate) {
      return 1;
    }
    if (a.publicationDate > b.publicationDate) {
      return -1;
    }
    return 0;
  });
}
