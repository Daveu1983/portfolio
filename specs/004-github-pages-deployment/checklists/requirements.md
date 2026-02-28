# Requirements Checklist: GitHub Pages Deployment

**Purpose**: Verify all requirements from spec.md are met before marking the feature complete.
**Created**: 2026-02-28
**Feature**: [spec.md](../spec.md)

## Build Configuration

- [x] CHK001 `next.config.mjs` contains `output: 'export'`
- [x] CHK002 `next.config.mjs` contains `basePath: '/portfolio'`
- [x] CHK003 `npm run build` completes without errors locally — warnings about `headers` not applying are expected and documented in ADR-004

## GitHub Actions Workflow

- [x] CHK004 `.github/workflows/deploy.yml` exists
- [x] CHK005 Workflow triggers on push to `main`
- [x] CHK006 Workflow uses `actions/upload-pages-artifact` and `actions/deploy-pages`
- [x] CHK007 Workflow requires no secrets beyond default `GITHUB_TOKEN`

## Live Deployment

- [x] CHK008 GitHub Pages source set to **GitHub Actions** in repository settings
- [x] CHK009 GitHub Actions workflow runs successfully after a push to `main`
- [x] CHK010 Site loads at `https://daveu1983.github.io/portfolio/` with no console 404 errors
- [x] CHK011 All nav links (About, Projects, Contact) scroll to the correct sections
- [x] CHK012 All external links (GitHub, LinkedIn, project URLs) open correctly in a new tab
