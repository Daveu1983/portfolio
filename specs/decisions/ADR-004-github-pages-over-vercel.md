# ADR-004: GitHub Pages Instead of Vercel

**Date**: 2026-02-28
**Status**: Accepted
**Supersedes**: Spec 001 FR-006 assumption (hosting provider to be decided)

## Context

Spec 001 left the hosting provider open. Vercel was considered as the natural fit for a Next.js site, particularly because it supports custom HTTP response headers (enabling the security headers configured in `next.config.mjs`).

## Decision

The site is deployed to GitHub Pages via a GitHub Actions workflow (`.github/workflows/deploy.yml`).

Next.js is configured with:
- `output: 'export'` — produces a fully static site
- `basePath: '/portfolio'` — required because GitHub Pages serves the repo at `https://daveu1983.github.io/portfolio/`

## Reason

Keeping everything within GitHub consolidates tooling. The site is purely static with no server-side features, so GitHub Pages is fully capable of hosting it.

## Trade-offs Accepted

- Custom HTTP security headers (`X-Frame-Options`, `Content-Security-Policy`, etc.) defined in `next.config.mjs` are **not applied** by GitHub Pages — they are silently ignored for static file serving
- If security headers become a priority, migrating to Vercel or adding Cloudflare in front of GitHub Pages are the available remediation paths
