# Implementation Plan: Professional Techie Redesign

**Feature**: Professional Techie Redesign
**Version**: 1.0
**Created**: 2026-02-27

## 1. Technology Stack

- **Framework**: Next.js 14.x (App Router) — unchanged
- **Language**: TypeScript 5.x — unchanged
- **UI Library**: React 18.x — unchanged
- **Styling**: Tailwind CSS 3.x — extended with new dark theme palette
- **Fonts**: Google Fonts — add `JetBrains Mono` for code-accent typography alongside existing `Inter`
- **Icons**: `lucide-react` (lightweight, tree-shakeable icon library) for nav and skill badges
- **Content**: Static TypeScript data files for projects and skills (no new dependencies needed)

## 2. Project Structure Changes

```
/app
├── layout.tsx              # Update: add JetBrains Mono font, update metadata
└── page.tsx                # Replace: full homepage with all sections

/components
├── Header.tsx              # Update: real name/handle + working nav links
├── Footer.tsx              # Update: real social links + developer name
├── sections/               # NEW directory
│   ├── Hero.tsx            # NEW: name, title, tagline, CTA
│   ├── About.tsx           # NEW: short bio section
│   ├── Projects.tsx        # NEW: project cards grid
│   ├── Skills.tsx          # NEW: tech stack badges
│   └── Contact.tsx         # NEW: links to GitHub / LinkedIn / email
└── ui/
    ├── ProjectCard.tsx     # NEW: single project card component
    └── SkillBadge.tsx      # NEW: single skill badge component

/data/                      # NEW directory — static content
├── projects.ts             # NEW: array of Project objects
└── skills.ts               # NEW: array of Skill objects

/tailwind.config.ts         # Update: new dark tech color palette
/app/globals.css            # Update: CSS custom properties for theme
```

## 3. Design Direction

### Color Palette — "Dark Terminal"

| Role            | Value       | Usage                                  |
|-----------------|-------------|----------------------------------------|
| bg-base         | `#0d1117`   | Page background (GitHub dark-like)     |
| bg-surface      | `#161b22`   | Cards, header background               |
| bg-border       | `#30363d`   | Borders, dividers                      |
| accent-primary  | `#58a6ff`   | Primary CTA, links, highlights         |
| accent-green    | `#3fb950`   | "Available" badge, success states      |
| accent-purple   | `#bc8cff`   | Skill badges, decorative accents       |
| text-primary    | `#e6edf3`   | Main body text                         |
| text-muted      | `#8b949e`   | Secondary text, labels                 |

### Typography

- **Headings**: `Inter` (existing) — bold weight
- **Code accents**: `JetBrains Mono` — used for the hero tagline prefix (e.g., `> Hello, I'm`), section labels, and skill badge text
- **Body**: `Inter` — existing

### Section Layout (top to bottom on homepage)

1. **Hero** — Full viewport height, centered. Code-style intro line (`> hello world`), large name, title, tagline, two CTAs (View Work / GitHub).
2. **About** — Two-column on desktop (bio left, "currently" status right). Single column on mobile.
3. **Projects** — Heading + responsive card grid (1 col mobile → 2 col tablet → 3 col desktop).
4. **Skills** — Grouped badges by category (Languages, Frameworks, Tools).
5. **Contact** — Simple centered section with icon links.

## 4. Implementation Strategy

### Phase 1: Theme Foundation
Update `tailwind.config.ts` with the new dark palette and add `JetBrains Mono` to `layout.tsx`. Update `globals.css` with a dark `body` background. This makes the immediate visual impact obvious with zero component work.

### Phase 2: Header & Footer
Update the two shared components to use real names and real links. These appear on every page, so fixing them early eliminates the "MyPortfolio / placeholder links" problem site-wide.

### Phase 3: Static Data
Create `/data/projects.ts` and `/data/skills.ts` with placeholder entries. Decoupling content from components lets the developer update content without touching component code later.

### Phase 4: Section Components (User Stories 1 & 2)
Build each section component independently. Each can be developed and visually verified in isolation before being assembled into `page.tsx`.
- `Hero.tsx` → `About.tsx` → `Projects.tsx` + `Skills.tsx` (parallel) → `Contact.tsx`

### Phase 5: Homepage Assembly
Replace `app/page.tsx` content to compose all section components in order. Remove the old single-article render.

### Phase 6: Polish
- Hover/focus states on all interactive elements
- Mobile/tablet/desktop layout review
- Verify zero `href="#"` placeholders remain

## 5. Testing Strategy

- **Manual**: Verify each section at 375px (mobile), 768px (tablet), 1440px (desktop)
- **Automated check**: `grep -r 'href="#"' components/` must return no results
- **Lighthouse**: Run post-implementation; score must remain ≥ 90
- **5-second test**: Show the homepage to another person and ask them to name who this portfolio belongs to and what they do
