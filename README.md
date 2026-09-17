# Topvon AI Desktop

A Tauri 2 desktop shell for an AI-native development environment. This first increment establishes the desktop application structure and an interactive local workspace UI; it intentionally does **not** connect to the Topvon API or implement authentication until the existing API contract is supplied.

## Architecture

- `src/` — React/TypeScript presentation layer. Feature folders isolate chat, editor, explorer, and terminal UI.
- `src/lib/` and `src/types/` — frontend-only starter workspace data and shared UI types.
- `src-tauri/` — Rust desktop host. Native capabilities are opt-in; the starter only exposes a non-sensitive `app_info` command.
- `.env.example` — documents public configuration only. Never put credentials, service-role keys, or user tokens in Vite environment files.

## Development

```bash
npm install
npm run tauri dev
```

The app is configured with a localhost Vite development server and a resizable Windows-first native window. Tauri retains macOS/Linux support through its standard build targets.

## Next integration step

Before adding sign-in, model discovery, chat streaming, or any backend call, provide the Topvon API/authentication contract: base URL, endpoint shapes, authentication/session flow, streaming protocol, model and reasoning control schema, and error/cancellation semantics.
