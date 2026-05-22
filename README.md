# DraftForge

## About

DraftForge is a League of Legends-inspired draft simulator. It supports Normal Draft and Fearless Draft, champion bans and picks, composition analysis, role-based recommendations, counter-pick suggestions, and a persistent tier list editor.

The champion dataset is generated from Riot Data Dragon and adjusted for the current competitive meta reference used by the project.

## Installation

```bash
npm install
npm run dev
```

For a production-like local preview:

```bash
npm run build
npm run preview
```

## How To Use

1. Open the main route `/`.
2. Choose `Normal Draft` or `Fearless Draft`.
3. In Normal Draft, complete one standard draft flow.
4. In Fearless Draft, play up to 5 games; champions picked in previous games become unavailable in later games.
5. Use the central champion grid to pick or ban according to the current draft step.
6. Use role filters and search to find champions quickly.
7. Review team analysis, recommendations, and counter-pick suggestions in the lower panels.
8. Use the Tier List page to edit champion tiers, roles, tags, synergies, counters, and notes.

## Architecture

- `src/data`: champion dataset, roles, tags, and draft order.
- `src/types`: shared TypeScript contracts.
- `src/store`: Zustand stores for draft state, champions, and settings.
- `src/services`: pure draft, analysis, recommendation, and counter-pick logic.
- `src/components`: reusable UI components.
- `src/pages`: main application pages.
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow.

## GitHub Pages Deployment

This project is already configured for GitHub Pages through GitHub Actions.

After pushing the repository to GitHub:

1. Go to your repository on GitHub.
2. Open `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to the `main` branch.
6. Wait for the `Deploy to GitHub Pages` workflow to finish.
7. Your site will be available at:

```text
https://kellernz1.github.io/draftforge/
```

The workflow runs:

```bash
npm ci
npm run build
```

Then it uploads the `dist` folder to GitHub Pages. It also copies `dist/index.html` to `dist/404.html` so client-side routes can fall back to the app.

## Roadmap

- Phase 1: Local MVP with complete draft flow, analysis, and persistent tier list.
- Phase 2: Advanced composition presets and draft filters.
- Phase 3: Draft history and export tools.
- Phase 4: Patch comparison and meta tracking.
- Phase 5: External data import.
- Phase 6: Riot API integration and AI Coach features.

## Contributing

Create a branch, keep draft rules covered by TypeScript, and run this before submitting changes:

```bash
npm run build
```
