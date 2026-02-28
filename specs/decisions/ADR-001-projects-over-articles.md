# ADR-001: Projects-Only Homepage Instead of Markdown Article Feed

**Date**: 2026-02-28
**Status**: Accepted
**Supersedes**: Spec 001 FR-002, FR-003, FR-004 (Markdown articles as primary content)

## Context

Spec 001 was written with a blog/articles-first approach — the homepage would list Markdown articles and each article would have its own dynamic page. A `content/articles/welcome.md` placeholder was created and the data pipeline (`gray-matter`, `remark`, `remark-html`) was installed.

As the site evolved through specs 002 and 003, the redesign shifted the homepage to a sections-based layout (Hero, About, Projects, Contact). The articles feed was never wired into the new homepage.

## Decision

The homepage will NOT render a Markdown article list. Instead:

- Projects are defined in `data/projects.ts` and displayed via the Projects section
- External articles and write-ups are linked directly from project cards (e.g., dev.to posts)
- The `content/articles/` directory and Markdown pipeline dependencies (`gray-matter`, `remark`, `remark-html`) are retained in case a blog section is added in the future, but are not used in the current homepage

## Consequences

- Spec 001 FR-002, FR-003, and FR-004 are not met by the current implementation — this is intentional
- Adding new "articles" means adding an entry to `data/projects.ts` and linking to the external post
- A future spec could introduce a `/blog` route if a full article section is desired
