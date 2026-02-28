# Feature Specification: Professional Techie Redesign

**Feature Branch**: `003-professional-techie-redesign`
**Created**: 2026-02-27
**Status**: Draft
**Input**: User description: "the site doesnt look very professional or techie — redesign it to look like a real developer portfolio with a strong visual identity, proper sections, and a tech-focused aesthetic"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - First Impression (Priority: P1)

As a recruiter or fellow developer who lands on the portfolio for the first time, I want to immediately understand who this person is, what they do, and be visually impressed, so that I form a strong positive first impression within a few seconds.

**Why this priority**: The homepage hero is the single most important piece of real estate. A bland or confusing first impression causes visitors to leave immediately.

**Independent Test**: A user who has never seen the site can, within 5 seconds of landing, state the owner's name, professional title, and at least one key area of expertise.

**Acceptance Scenarios**:

1. **Given** a visitor loads the homepage, **When** the page renders, **Then** they see a prominent Hero section showing the developer's name, title, a short tagline, and a primary call-to-action (e.g., "View My Work").
2. **Given** a visitor looks at the Hero section, **When** they observe the visual design, **Then** the styling uses a dark or high-contrast background, a monospaced or code-style accent font, and a distinct tech-focused color palette (not default indigo/pink).
3. **Given** a visitor is on any page, **When** they view the header, **Then** the header displays the developer's actual name or handle (not "MyPortfolio") alongside working navigation links.

---

### User Story 2 - Exploring Work & Skills (Priority: P1)

As a potential employer or collaborator, I want to browse the developer's projects and skills clearly presented on the homepage, so that I can quickly assess technical competence and relevant experience.

**Why this priority**: Portfolio visitors are evaluating capability. Without project and skills sections, the site fails its primary purpose.

**Independent Test**: A visitor can, without scrolling more than 3 times, find a section showing at least one project and a section showing the developer's tech stack.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls the homepage, **When** they reach the projects section, **Then** they see project cards each displaying a project name, a short description, the tech stack used, and a link.
2. **Given** a visitor scrolls the homepage, **When** they reach the skills section, **Then** they see a visual representation of the developer's key technologies (e.g., icons or labelled badges).
3. **Given** a visitor views a project card, **When** they hover over it, **Then** the card provides a subtle visual response (e.g., border highlight or lift effect) confirming it is interactive.

---

### User Story 3 - Making Contact (Priority: P2)

As a visitor who wants to hire or collaborate with the developer, I want to easily find working contact links, so that I can reach out without having to search for them.

**Why this priority**: A portfolio with no real contact links is a dead end. The footer and contact section must have real links, not placeholders.

**Independent Test**: A visitor can reach an external profile (GitHub, LinkedIn) or send a message to the developer directly from the site.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the footer or contact section, **When** they click a social link (GitHub, LinkedIn), **Then** they are taken to the correct external profile URL in a new tab.
2. **Given** a visitor is in the footer, **When** they read the copyright notice, **Then** it shows the developer's actual name, not "My Portfolio".

---

### Edge Cases

- How does the projects section appear when there are zero projects defined? (A friendly placeholder card should be shown.)
- How do skill badges render if a technology name is long?
- Does the monospaced/code font fallback gracefully if the custom font fails to load?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The homepage MUST contain a Hero section with the developer's name, professional title, a tagline, and a call-to-action button.
- **FR-002**: The homepage MUST contain a Projects section displaying project cards. Each card MUST show a project name, short description, tech stack tags, and a link.
- **FR-003**: The homepage MUST contain a Skills/Tech Stack section showing the developer's key technologies.
- **FR-004**: The homepage MUST contain an About section with a short bio.
- **FR-005**: The site header MUST display a personalised name/handle and working navigation links (not just "Home").
- **FR-006**: The site footer MUST replace all `#` placeholder links with real external URLs.
- **FR-007**: The color palette MUST replace the default indigo/pink scheme with a high-contrast, tech-focused palette.
- **FR-008**: The site MUST use at least one monospaced or code-style accent font for decorative headings or labels to reinforce the tech aesthetic.
- **FR-009**: Interactive elements (cards, buttons, nav links) MUST have visible hover/focus states.

### Key Entities

- **Project**: A portfolio item. Attributes: `title`, `description`, `techStack` (array of strings), `url` (live or repo link), `featured` (boolean).
- **Skill**: A technology or tool. Attributes: `name`, `category` (e.g., "Language", "Framework", "Tool").

### Assumptions

- Content (name, bio, project details, links) will be provided by the developer in static data files or updated markdown — placeholder values are acceptable for scaffolding.
- The monospaced accent font will be sourced from Google Fonts (e.g., JetBrains Mono or Fira Code) to avoid adding binary assets.
- The redesign keeps the existing Next.js / Tailwind / Markdown architecture — this is a visual and structural change, not a technology migration.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A developer (not the portfolio owner) can identify the portfolio owner's name, title, and at least one technology stack within 5 seconds of loading the homepage.
- **SC-002**: Google Lighthouse score for Performance, Accessibility, and Best Practices MUST remain at 90 or higher after the redesign.
- **SC-003**: Zero `href="#"` placeholder links exist in the production footer or navigation.
- **SC-004**: The site MUST use a minimum of 3 distinct visual sections below the header on the homepage (e.g., Hero, Projects, Skills, About, Contact).
- **SC-005**: A peer review by one other developer rates the visual design as "professional" and "tech-focused" on a simple thumbs-up/thumbs-down assessment.
