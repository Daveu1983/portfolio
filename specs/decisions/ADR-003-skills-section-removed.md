# ADR-003: Skills Section Removed from Homepage

**Date**: 2026-02-28
**Status**: Accepted
**Supersedes**: Spec 003 FR-003 (Skills/Tech Stack section)

## Context

Spec 003 included a Skills/Tech Stack section (`components/sections/Skills.tsx`, `data/skills.ts`) as a requirement. The section was implemented and appeared between Projects and Contact on the homepage.

During a content review session, the decision was made to remove it.

## Decision

The Skills section is removed from the homepage. `components/sections/Skills.tsx` remains on disk but is not imported or rendered in `app/page.tsx`. The nav link for Skills has been removed from `components/Header.tsx`.

## Reason

Skills lists on portfolio sites can feel generic. The tech stack for each project is already communicated via the `techStack` tags on each project card, which is more contextual and meaningful to a visitor.

## Consequences

- Spec 003 FR-003 is not met — intentional
- `components/sections/Skills.tsx` and `data/skills.ts` are dormant but not deleted
- A future decision may restore the section or replace it with a different format
