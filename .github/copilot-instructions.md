# NeoBram Testing Instructions

This repository provides portable NeoBram testing skills. When testing is requested, load the relevant skill from `skills/` and use `skills/testing-orchestrator/SKILL.md` for multi-category work.

The local CLI is available through Node.js:

```bash
node cli/neobram-test.mjs validate
node cli/neobram-test.mjs analyze --project .
```

Use actual execution evidence only. Preserve PASS, FAIL, BLOCKED, NOT_RUN, and INCONCLUSIVE statuses. Never expose secrets, perform destructive testing without authorization, or modify application code merely to make tests pass.
