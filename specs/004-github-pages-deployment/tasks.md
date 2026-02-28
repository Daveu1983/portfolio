# Tasks: GitHub Pages Deployment

**Input**: Design documents from `/specs/004-github-pages-deployment/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Static Export Configuration

**Purpose**: Make the Next.js build produce a fully static output compatible with GitHub Pages.

- [x] T001 Add `output: 'export'` and `basePath: '/portfolio'` to `next.config.mjs`

---

## Phase 2: GitHub Actions Workflow

**Purpose**: Automate build and deployment to GitHub Pages on every push to `main`.

- [x] T002 Create `.github/workflows/deploy.yml` with build and deploy jobs

---

## Phase 3: Manual Step (User)

**Purpose**: Enable GitHub Pages in the repository settings.

- [ ] T003 In the GitHub repository → Settings → Pages → set Source to **GitHub Actions**

---

## Dependencies & Execution Order

- T001 must complete before T002 (workflow deploys the `out/` directory produced by the export config)
- T003 is a one-time manual step performed by the repository owner in GitHub settings
