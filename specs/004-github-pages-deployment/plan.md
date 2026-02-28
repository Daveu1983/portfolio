# Implementation Plan: GitHub Pages Deployment

**Branch**: `004-github-pages-deployment` | **Date**: 2026-02-28 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/004-github-pages-deployment/spec.md`

## Summary

Configure the Next.js portfolio as a fully static export and deploy it automatically to GitHub Pages via GitHub Actions on every push to `main`. The site is served at `https://daveu1983.github.io/portfolio/`, requiring `basePath: '/portfolio'` so all asset paths resolve correctly.

## Technical Context

**Language/Version**: TypeScript / Node.js 20
**Primary Dependencies**: Next.js 14.2.35, GitHub Actions
**Storage**: N/A
**Testing**: N/A
**Target Platform**: GitHub Pages (static CDN)
**Project Type**: Web (Next.js static export)
**Performance Goals**: N/A — static site, no runtime performance constraints
**Constraints**: GitHub Pages serves only static files; no HTTP headers customisable; site served under `/portfolio/` subpath

## Constitution Check

- **Principle I: Client-Side & Stateless**: This feature adds a CI/CD deployment pipeline only. No backend, database, or user data collection is introduced. **PASS.**

## Project Structure

### Documentation (this feature)

```text
specs/004-github-pages-deployment/
├── spec.md
├── plan.md
├── tasks.md
└── checklists/
    └── requirements.md
```

### Source Code Changes

```text
next.config.mjs                        # Add output: 'export' and basePath
.github/
└── workflows/
    └── deploy.yml                     # GitHub Actions build + deploy workflow
```

## Key Decisions

| Decision | Choice | Reason |
|---|---|---|
| Static export | `output: 'export'` | Required for GitHub Pages; site has no server-side features |
| basePath | `/portfolio` | GitHub Pages serves project repos at `/<repo-name>/` |
| Deployment method | Official GitHub Pages Actions | Zero secrets required beyond default `GITHUB_TOKEN` |
| Node version | 20 | LTS; matches dev environment |
