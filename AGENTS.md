# gizzi-code — Agent Guide

> Workspace-aware AI assistant CLI for the Allternit ecosystem.

## Quick Start

```bash
# Install dependencies (Bun only)
bun install

# Run tests
bun test --timeout 30000

# Type-check
bun run typecheck

# Dev mode
bun run dev

# Build native binaries
bun run build
```

## Key Commands

| Command | What it does |
|---------|--------------|
| `bun run dev` | Start CLI in interactive TUI mode |
| `bun run build` | Bundle and compile native binaries |
| `bun test --timeout 30000` | Run Bun test suite |
| `bun run typecheck` | Run `tsgo --noEmit` |
| `bun run db generate --name <slug>` | Generate Drizzle migration |

## Directory Map

| Path | Purpose |
|------|---------|
| `src/cli/` | Yargs router, commands, TUI entrypoint |
| `src/runtime/` | Session/execution logic, loops, agents |
| `src/services/` | External service integrations |
| `packages/` | Internal workspace packages (auto-discovered by Bun) |
| `test/` | Bun test files |

## Conventions

- **Package manager:** Bun (uses `bun.lock`, `bunfig.toml`)
- **Monorepo:** Bun auto-discovers `packages/*`; Turbo orchestrates tasks
- **Frameworks:** `@opentui/solid` for TUI, Hono for web, Drizzle for DB, Yargs for CLI
- **Tests:** Preload `test/preload.ts` for isolation

## Warnings

- This repo uses Bun workspaces (`packages/*`). Ensure `bun install` is run from the root.
- Some Nix scripts still reference old naming (`opencode`) — use with caution.

- This repo is **Bun-native**; do not use pnpm/npm here.

## Related Repos

- [`allternit-platform`](https://github.com/Gizziio/allternit-platform) — Core platform
- [`allternit-sdk`](https://github.com/Gizziio/allternit-sdk) — SDK and plugins
- [`gizzi-code-docs`](https://github.com/Gizziio/gizzi-code-docs) — This project's docs
