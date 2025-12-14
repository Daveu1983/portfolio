// types/article.ts

export interface Article {
  slug: string;
  title: string;
  publicationDate: string; // ISO 8601 format
  excerpt?: string;
  coverImage?: string;
  content?: string; // HTML string after Markdown parsing
}
