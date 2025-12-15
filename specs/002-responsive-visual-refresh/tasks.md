# Tasks: Responsive Visual Refresh

**Input**: Design documents from `/specs/002-responsive-visual-refresh/`
**Prerequisites**: plan.md, spec.md

## Format: `- [ ] [ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Configure the styling foundation for the project.

- [x] T001 Configure Tailwind CSS theme in `tailwind.config.ts` to include the project's color palette and fonts for a "professional with plain colors" look, based on Material Design principles.
- [x] T002 Install utility libraries `clsx` and `tailwind-merge` via npm: `npm install clsx tailwind-merge`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the basic page structure for the entire application.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T003 Ensure the main layout in `app/layout.tsx` correctly imports and applies global styles from `app/globals.css`.
- [x] T004 Modify the `Header` component in `components/Header.tsx` to be a basic structural placeholder.
- [x] T005 Modify the `Footer` component in `components/Footer.tsx` to be a basic structural placeholder.

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Mobile Browsing (Priority: P1) 🎯 MVP

**Goal**: Deliver a seamless, readable, and navigable experience on mobile devices.

**Independent Test**: The website can be fully tested on a mobile device or browser emulation. The core value is delivered if a user can successfully browse and interact with all key pages on a screen width of 320px without usability issues.

### Implementation for User Story 1

- [x] T006 [US1] Implement the mobile-first layout for the `Header` component in `components/Header.tsx`, including a functional hamburger menu for navigation on small screens.
- [x] T007 [US1] Implement the mobile-first layout for the `Footer` component in `components/Footer.tsx`, ensuring all links are easily tappable.
- [x] T008 [US1] Apply responsive typography and spacing to the content in `app/page.tsx` to ensure readability on screen widths down to 320px.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently on mobile devices.

---

## Phase 4: User Story 2 - Desktop Browsing (Priority: P2)

**Goal**: Adapt the mobile-first design to provide an enhanced experience on larger screens.

**Independent Test**: The website can be tested on a desktop browser. The value is delivered if the layout adapts to wider screens gracefully, making effective use of the extra space.

### Implementation for User Story 2

- [x] T009 [P] [US2] Enhance the `Header` component in `components/Header.tsx` with `md:` and `lg:` Tailwind variants to display a full, horizontal navigation bar on larger screens.
- [x] T010 [P] [US2] Enhance the `app/page.tsx` component with `md:` and `lg:` Tailwind variants to create a more expansive layout where appropriate for desktop views.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work, with the layout correctly adapting between mobile and desktop views.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Finalize the implementation by ensuring quality and consistency.

- [x] T011 Perform a full review of the site across mobile, tablet, and desktop viewport sizes to ensure fluid transitions and no layout breaks.
- [x] T012 - SKIPPED (Manual task) Run a Google Lighthouse audit and create GitHub issues for any performance, accessibility, or SEO problems with a score below 90.
- [x] T013 - (User opted out of README update) Update the `README.md` with any new instructions or information related to the visual refresh.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)** -> **Foundational (Phase 2)** -> **User Stories (Phase 3 & 4)** -> **Polish (Phase 5)**

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2).
- **User Story 2 (P2)**: Can start after Foundational (Phase 2). It can be developed in parallel with US1, but its visual impact is best reviewed after US1 is complete.

### Parallel Opportunities

- **T009** and **T010** can be worked on in parallel within Phase 4.
- Once the Foundational phase is complete, a developer could start on User Story 2 tasks while another works on User Story 1.

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational
3.  Complete Phase 3: User Story 1
4.  **STOP and VALIDATE**: Test the site thoroughly on mobile devices. At this point, you have a functional, mobile-optimized site.

### Incremental Delivery

1.  Complete Setup + Foundational -> Foundation ready.
2.  Add User Story 1 -> Test independently on mobile -> You have a complete mobile experience (MVP).
3.  Add User Story 2 -> Test independently on desktop -> You have a complete responsive experience.
4.  Complete Polish phase.
