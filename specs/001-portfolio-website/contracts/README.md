# Content Contracts

This is a static website with no external runtime API. The "contract" for this project is the structure of the content files themselves.

## Article Contract

All content is driven by Markdown (`.md`) files. For the application to correctly build and render pages, each Markdown file must contain a `yaml` frontmatter block with specific fields.

### Frontmatter Fields

- `title` (string, required)
- `publicationDate` (string, required, ISO 8601 format)
- `slug` (string, required, unique)
- `excerpt` (string, optional)
- `coverImage` (string, optional, path to image)

Please see the `data-model.md` file for a more detailed breakdown of the fields and their validation rules.
