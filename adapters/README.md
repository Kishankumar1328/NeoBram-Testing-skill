# Host Adapters

These are thin host-integration pointers. The canonical testing logic remains under `skills/` and is not duplicated.

| Host | Adapter | Canonical entrypoint |
|---|---|---|
| Codex | `.codex-plugin/plugin.json` | `skills/` |
| Cursor | `.cursor/rules/neobram-testing.mdc` | `skills/testing-orchestrator/SKILL.md` |
| VS Code | `.github/copilot-instructions.md` and `.github/instructions/neobram-testing.instructions.md` | `skills/testing-orchestrator/SKILL.md` |
| Antigravity | `.agents/skills/neobram_testing_agent/SKILL.md` | `skills/testing-orchestrator/SKILL.md` |

Runtime availability and host-specific behavior must still be validated in each installed host. The adapters do not claim automatic support for unavailable commands or APIs.
