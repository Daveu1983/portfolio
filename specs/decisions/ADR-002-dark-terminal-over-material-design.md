# ADR-002: Dark Terminal Design Instead of Material Design

**Date**: 2026-02-28
**Status**: Accepted
**Supersedes**: Spec 002 FR-003 (Material Design principles)

## Context

Spec 002 specified Material Design principles as the visual foundation for the responsive refresh. Spec 003 was subsequently raised to address the site looking insufficiently professional or "techie".

## Decision

The site uses a custom "Dark Terminal" design system rather than Material Design:

- Background: near-black (`#0d1117`, `#161b22`) — GitHub-style dark palette
- Accents: blue (`#58a6ff`), green (`#3fb950`), purple (`#bc8cff`)
- Typography: `Inter` for body, `JetBrains Mono` for decorative/monospaced elements
- No Material Design components, elevation shadows, or ripple effects

## Reason

A dark, code-editor-inspired aesthetic is more appropriate for a DevOps engineer portfolio than Material Design. It communicates technical identity directly through visual style. Spec 003 was explicitly raised to achieve this outcome.

## Consequences

- Spec 002 FR-003 is not met — intentional, superseded by spec 003
- The design system is defined in `tailwind.config.ts` under custom color tokens
