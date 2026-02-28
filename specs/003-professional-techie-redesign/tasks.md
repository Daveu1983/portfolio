# Tasks: Professional Techie Redesign

**Input**: Design documents from `/specs/003-professional-techie-redesign/`
**Prerequisites**: plan.md, spec.md

## Format: `- [ ] [ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

---

## Phase 1: Theme Foundation (Shared Infrastructure)

**Purpose**: Establish the dark "techie" visual identity at the lowest level. All subsequent work builds on this.

- [ ] T001 Update `tailwind.config.ts` — replace the existing indigo/pink palette with the "Dark Terminal" color palette defined in `plan.md` (bg-base `#0d1117`, bg-surface `#161b22`, accent-primary `#58a6ff`, accent-green `#3fb950`, accent-purple `#bc8cff`, text-primary `#e6edf3`, text-muted `#8b949e`, bg-border `#30363d`).
- [ ] T002 Update `app/layout.tsx` — add `JetBrains Mono` from Google Fonts alongside the existing `Inter` import. Expose both fonts as CSS variables (`--font-inter`, `--font-mono`). Update `<html>` to use a dark background class.
- [ ] T003 Update `app/globals.css` — set `body { background-color: #0d1117; color: #e6edf3; }` so the dark theme applies globally before any component renders.

**Checkpoint**: Running `npm run dev` should now show a dark background. The "before and after" is immediately visible with zero component changes.

---

## Phase 2: Header & Footer (Shared Components — Blocking)

**Purpose**: Fix the two components that appear on every page. Eliminates "MyPortfolio" branding and placeholder links site-wide.

**⚠️ CRITICAL**: These must be updated before new sections are built so all pages share the correct identity.

- [ ] T004 [US3] Update `components/Header.tsx` — replace "MyPortfolio" with the developer's actual name or handle. Apply the dark theme classes (`bg-surface`, `border-bg-border`). Add nav links for: Home, About, Projects, and Contact (all pointing to homepage anchor IDs: `/#about`, `/#projects`, `/#contact`).
- [ ] T005 [US3] Update `components/Footer.tsx` — replace all `href="#"` links with real URLs for GitHub and LinkedIn (use placeholder valid URLs like `https://github.com/daveu1983` if not yet known). Replace "My Portfolio" in the copyright with the developer's name. Apply dark theme classes.

**Checkpoint**: Header and footer look "real" — no placeholder text or dead links. The dark theme is visible across the full page chrome.

---

## Phase 3: Static Content Data

**Purpose**: Separate content from component code. Defines the data contract the section components will consume.

- [ ] T006 Create `/data/projects.ts` — define and export a `Project` interface (`title`, `description`, `techStack: string[]`, `url`, `featured: boolean`) and a `projects` array with 2–3 placeholder project entries.
- [ ] T007 [P] Create `/data/skills.ts` — define and export a `Skill` interface (`name`, `category: 'Language' | 'Framework' | 'Tool' | 'Platform'`) and a `skills` array with representative placeholder entries grouped by category.

**Checkpoint**: TypeScript compiles cleanly with the new data files. No UI change yet.

---

## Phase 4: Section Components — User Story 1 (Hero & About)

**Goal**: Deliver the "first impression" — a visitor can immediately tell who this is and what they do.

- [ ] T008 [US1] Create `components/sections/Hero.tsx` — full-width section with:
  - A code-style prefix line using `JetBrains Mono` (e.g., `> hello, world`)
  - Large `h1` with the developer's name
  - Subtitle showing professional title
  - Short tagline (one sentence)
  - Two CTA buttons: "View My Work" (scrolls to `#projects`) and "GitHub" (external link)
  - Uses `bg-base` background, `accent-primary` for the CTA button, `text-muted` for the monospaced prefix
- [ ] T009 [US1] Create `components/sections/About.tsx` — section with `id="about"` containing:
  - Short bio paragraph (2–3 sentences, placeholder text acceptable)
  - A "Currently" or "Status" aside (e.g., open to work badge using `accent-green`)
  - Responsive: two-column on `md:` and above, single column below

**Checkpoint**: User Story 1 is partially complete. A visitor landing on the homepage sees a strong hero and a brief bio. The 5-second test should now pass.

---

## Phase 5: Section Components — User Story 2 (Projects & Skills)

**Goal**: A visitor can quickly evaluate technical competence from the homepage.

- [ ] T010 [US2] Create `components/ui/ProjectCard.tsx` — a card component accepting a `Project` prop that renders:
  - Project title as an `h3`
  - Description paragraph
  - Tech stack as small `SkillBadge` tags (using `accent-purple`)
  - A link icon + URL
  - `bg-surface` background, `bg-border` border, hover state: `border-accent-primary` glow/highlight
- [ ] T011 [P] [US2] Create `components/ui/SkillBadge.tsx` — a small pill/badge component accepting `name` and `category` props, styled with the monospaced font and appropriate accent color per category.
- [ ] T012 [US2] Create `components/sections/Projects.tsx` — section with `id="projects"` that imports `projects` from `/data/projects.ts` and renders them in a responsive grid using `ProjectCard` (1 col → 2 col `md:` → 3 col `lg:`). Show a friendly placeholder card if the array is empty.
- [ ] T013 [P] [US2] Create `components/sections/Skills.tsx` — section that imports `skills` from `/data/skills.ts`, groups them by `category`, and renders each group with a label and a row of `SkillBadge` components.

**Checkpoint**: User Story 2 is complete. A visitor can see projects with tech stack tags and a skills section.

---

## Phase 6: Contact Section — User Story 3

- [ ] T014 [US3] Create `components/sections/Contact.tsx` — section with `id="contact"` containing:
  - Short "get in touch" heading and one-line description
  - Icon links to GitHub, LinkedIn, and an email address (use `lucide-react` icons: `Github`, `Linkedin`, `Mail`)
  - Centered layout, `text-muted` base color with `text-accent-primary` on hover

**Checkpoint**: User Story 3 complete. Zero dead-end `href="#"` links on the page.

---

## Phase 7: Homepage Assembly

**Purpose**: Wire all sections together into a single, scrollable homepage.

- [ ] T015 Replace the content of `app/page.tsx` — remove the single-article markdown render and instead compose all section components in order: `<Hero />`, `<About />`, `<Projects />`, `<Skills />`, `<Contact />`.

**Checkpoint**: The full homepage is assembled. Running `npm run dev` shows all five sections end-to-end.

---

## Phase 8: Install Icon Dependency

- [ ] T016 Run `npm install lucide-react` to add the icon library used in `Header.tsx` and `Contact.tsx`.

> Note: This can be done any time before T004 or T014, whichever comes first.

---

## Phase 9: Polish & Verification

- [ ] T017 [US1][US2][US3] Review the full page at mobile (375px), tablet (768px), and desktop (1440px) — fix any layout breaks, text overflow, or spacing issues found.
- [ ] T018 Verify hover and focus states on: nav links, CTA buttons, project cards, social links. Every interactive element must have a visible focus ring (accessibility).
- [ ] T019 Run `grep -r 'href="#"' components/` — confirm zero results. Fix any remaining placeholders.
- [ ] T020 Run `npm run build` — confirm the production build succeeds with zero TypeScript errors.
- [ ] T021 - (Manual) Run a Google Lighthouse audit on the production build and confirm scores remain ≥ 90 for Performance, Accessibility, and Best Practices.

---

## Dependencies & Execution Order

### Phase Dependencies

**Foundation (P1)** → **Header/Footer (P2)** → **Data (P3)** → **Sections (P4, P5, P6)** → **Assembly (P7)** → **Polish (P9)**

> T016 (npm install) can run at any point before T004 or T014.

### Parallel Opportunities

| Tasks | Can run in parallel because... |
|-------|-------------------------------|
| T006 + T007 | Different data files, no dependency |
| T010 + T011 | Different UI components, no dependency |
| T012 + T013 | Both depend on T010/T011 being done, but different sections |
| T017 through T020 | Independent verification steps |

## Implementation Strategy — MVP First

### Minimum Viable "Techie Portfolio" (P1 User Stories only)

1. Complete Phase 1 (Theme)
2. Complete Phase 2 (Header/Footer)
3. Complete T006 (projects data)
4. Complete T008 + T009 (Hero + About)
5. Complete T010 + T011 + T012 (ProjectCard + Projects section)
6. Complete T015 (Assembly)
7. **STOP AND VALIDATE**: The site now looks professional and techie. Show it to someone and run the 5-second test.

### Full Delivery

Continue with Skills (T013), Contact (T014), and all polish tasks (T017–T021).
