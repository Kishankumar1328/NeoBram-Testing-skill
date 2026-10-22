---
name: neobram_testing_agent
description: Coordinates the NeoBram project-aware testing skills for Antigravity workspaces.
---

Use the canonical NeoBram orchestrator at `skills/testing-orchestrator/SKILL.md` and the five specialist skills under `skills/`. Use the repository CLI for validation and discovery:

```bash
node cli/neobram-test.mjs validate
node cli/neobram-test.mjs analyze --project .
```

Follow the canonical skill instructions, preserve evidence-backed statuses, and do not claim checks passed unless they executed.
