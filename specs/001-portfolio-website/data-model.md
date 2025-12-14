# Data Model for Portfolio Website

This document outlines the data structure for the primary content entity of the website.

## Entity: Article

Represents a single piece of content, such as a blog post or a portfolio project page. Articles are defined by Markdown files with frontmatter.

### Fields

| Field           | Type            | Description                                                                 | Required |
|-----------------|-----------------|-----------------------------------------------------------------------------|----------|
| `title`         | `string`        | The main title of the article.                                              | Yes      |
| `publicationDate` | `string`        | The date the article was published, in ISO 8601 format (e.g., "2025-12-14"). | Yes      |
| `slug`          | `string`        | A unique, URL-friendly identifier for the article.                          | Yes      |
| `body`          | `string`        | The full content of the article in Markdown format.                         | Yes      |
| `excerpt`       | `string`        | A short summary of the article for display on listing pages.                | No       |
| `coverImage`    | `string`        | The path to a cover image for the article.                                  | No       |

### Validation Rules

- The `slug` for each article must be unique.
- The `publicationDate` must be a valid date.
- The build process should fail if any required fields are missing from an article's frontmatter.

### Example

File: `content/articles/my-first-post.md`

```markdown
---
title: "My First Post"
publicationDate: "2025-12-15"
slug: "my-first-post"
excerpt: "This is a short summary of my very first post!"
coverImage: "/images/posts/my-first-post.png"
---

## Welcome

This is the body of my first post. It's written in **Markdown**.
```
