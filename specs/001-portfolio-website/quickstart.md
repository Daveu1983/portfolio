# Quickstart for Portfolio Website

This guide provides instructions for setting up and running the project locally.

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 20.x or later)
- [npm](https://www.npmjs.com/) (or a compatible package manager like `yarn` or `pnpm`)

## 1. Installation

Clone the repository and install the dependencies.

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install dependencies
npm install
```

## 2. Local Development

To start the local development server with hot-reloading enabled:

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000).

## 3. Creating Content

To create a new article or project, add a new Markdown (`.md`) file to the `content/articles` directory. Ensure the file includes the required frontmatter as defined in the `specs/001-portfolio-website/contracts/README.md`.

## 4. Building for Production

To create a production-ready build of the static site:

```bash
npm run build
```

The output will be generated in the `.next` directory. You can then run the production server locally with `npm start`.
