# Rust Legacy Implementation

This directory contains the original Rust-based implementation of Save Guardian using eframe/egui.

## About

This is the archived Rust codebase that provided:
- Native desktop application with egui GUI
- Steam save scanning and detection
- Non-Steam save location detection
- Backup and restore functionality
- Save synchronization
- Koofr WebDAV cloud integration

## Building (for reference)

```bash
cd rust-legacy
cargo build --release
cargo run --release
```

## Why Archived?

The project has been migrated to a React + TypeScript stack for:
- Better cross-platform web deployment
- Larger ecosystem of UI components
- Easier onboarding for contributors
- Modern development tooling

## Original Structure

- `src/main.rs` - Application entry point and window setup
- `src/gui.rs` - egui UI implementation
- `src/steam.rs` - Steam save detection
- `src/non_steam.rs` - Non-Steam save detection
- `src/backup.rs` - Backup management
- `src/sync.rs` - Save synchronization
- `src/config.rs` - Configuration management
- `src/types.rs` - Shared data structures
- `build.rs` - Windows resource embedding

## Reference

This implementation remains as a reference for:
- Business logic and algorithms
- Save location detection patterns
- Backup/restore workflows
- Sync matching heuristics

For the current implementation, see the main project README.
