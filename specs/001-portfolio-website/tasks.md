# Tasks: Portfolio Website Construction

**Input**: Design documents from `specs/001-portfolio-website/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/

**Tests**: No automated tests were explicitly requested in the specification. Tasks for manual testing are implied in each user story's goal.

**Organization**: Tasks are grouped by phase and user story to enable incremental, independent implementation.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure using Next.js conventions.

- [X] T001 Initialize a new Next.js project in the current directory with TypeScript, Tailwind CSS, and ESLint, using the `app` router and a `src` directory.
- [X] T002 Install dependencies required for parsing Markdown frontmatter and content: `npm install gray-matter remark remark-html`
- [X] T003 Create the directory for storing content: `content/articles`
- [X] T004 Create placeholder file for content: `content/articles/welcome.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T005 [P] Define the `Article` data structure in a new file `types/article.ts` based on `data-model.md`.
- [X] T006 Implement the core content fetching logic in `lib/markdown.ts`. This file should export functions to get all articles and to get a single article by its slug.
- [X] T007 [P] Create the main application layout with basic HTML structure in `app/layout.tsx`.
- [X] T008 [P] Create a placeholder `Header` component in `components/Header.tsx`.
- [X] T009 [P] Create a placeholder `Footer` component in `components/Footer.tsx`.

**Checkpoint**: Foundation ready. The project has the core types and data-access logic defined.

---

## Phase 3: User Story 1 - Visitor Browsing (Priority: P1) 🎯 MVP

**Goal**: A visitor can navigate the website and read articles. This is the minimum viable product.
**Independent Test**: Run `npm run dev` and open a browser to `localhost:3000`. The homepage should list articles, and clicking an article should navigate to the full content page.

### Implementation for User Story 1

- [ ] T010 [P] [US1] Implement the `Header` component in `components/Header.tsx` to include the site title and navigation links.
- [ ] T011 [P] [US1] Implement the `Footer` component in `components/Footer.tsx` to include copyright information and social media links.
- [ ] T012 [US1] Implement the homepage at `app/page.tsx`. It should use the function from `lib/markdown.ts` to get all articles and display them in a list.
- [ ] T013 [P] [US1] Apply basic styling to the article list on the homepage using Tailwind CSS.
- [ ] T014 [US1] Implement the dynamic article page at `app/articles/[slug]/page.tsx`. This page should fetch the correct article content based on the `slug` parameter.
- [ ] T015 [US1] Render the article's title, publication date, and body content on the article page.
- [ ] T016 [P] [US1] Add styling to the article content using the `@tailwindcss/typography` plugin for readable text.

**Checkpoint**: User Story 1 is fully functional. The website is viewable and navigable.

---

## Phase 4: User Story 2 - Admin Content Management (Priority: P2)

**Goal**: The administrator's workflow for adding content is supported by the project structure and CI/CD setup.
**Independent Test**: Pushing a new Markdown file to the `main` branch of the GitHub repository triggers a successful deployment on the hosting platform (e.g., Vercel, Netlify).

### Implementation for User Story 2

- [ ] T017 [US2] Create the directory for GitHub Actions workflows: `.github/workflows/`
- [ ] T018 [US2] Create a basic CI/CD workflow file at `.github/workflows/deploy.yml`. This file should contain placeholder steps for checking out code, installing dependencies, and running a production build (`npm run build`). The actual deployment steps will depend on the chosen hosting provider.

**Checkpoint**: User Story 2 is supported. The project is ready for automated deployments.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and overall site quality.

- [ ] T019 [P] Create a custom 404 page by creating the file `app/not-found.tsx`.
- [ ] T020 [P] Add dynamic SEO metadata (titles, descriptions) to `app/layout.tsx` and the dynamic article page at `app/articles/[slug]/page.tsx`.
- [ ] T021 [P] Review and refine all Tailwind CSS styles, ensuring the site is fully responsive on mobile, tablet, and desktop screen sizes.
- [ ] T022 Validate that the final deployed site passes the success criteria from `spec.md` (Lighthouse scores, SSL rating).

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** must be completed first.
- **Phase 2 (Foundational)** depends on Phase 1.
- **Phase 3 (User Story 1)** depends on Phase 2. This phase delivers the MVP.
- **Phase 4 (User Story 2)** can be worked on in parallel with Phase 3, as it deals with deployment infrastructure rather than application code.
- **Phase 5 (Polish)** should be done after the core features are complete.

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational
3.  Complete Phase 3: User Story 1
4.  **STOP and VALIDATE**: The core website is now functional and can be deployed. This is the minimum viable product.

### Incremental Delivery

1.  Deliver MVP (Phases 1-3).
2.  Add automated deployment (Phase 4).
3.  Add polish and SEO improvements (Phase 5).