# NeoBram Testing Plugin

A portable repository skill bundle containing five independent testing skills for coding agents running inside an IDE or from a CLI.

This is a repository-level distribution. Install or copy the complete repository so the manifest's repository-root skill paths remain valid. An isolated copy of `neobram-testing-plugin/` is unsupported because the five skill files intentionally remain at repository level as the canonical implementations.

## Package contents

```text
neobram-testing-plugin/
  manifest.json
  PLUGIN.md
```

The skill implementations remain in the repository-level directories referenced by `manifest.json`:

```text
regression-testing/SKILL.md
functional-testing/SKILL.md
api-integration-testing/SKILL.md
security-testing/SKILL.md
system-testing/SKILL.md
```

## Platform model

The bundle has a shared core rather than separate implementations for each editor. Any platform that can provide repository instructions or load Markdown can use `PLUGIN.md` and the manifest. The host platform supplies its own native execution and display capabilities. VS Code, Cursor, Antigravity, Codex, Claude Code, and similar tools are intended hosts, not automatically integrated or runtime-validated platforms.

To integrate it, configure the host agent to load `neobram-testing-plugin/PLUGIN.md` as a project instruction or skill entrypoint, then keep the referenced paths unchanged. If the host uses a different discovery convention, add a thin pointer to this entrypoint in that convention; do not duplicate the skill logic. Such pointers are host configuration, not part of this portable bundle.

## Requirements

- No runtime package installation is required.
- The distribution model is `repository-level`, as declared in `manifest.json`.
- The target project and its test prerequisites remain the responsibility of the host environment.
- Security testing requires explicit authorization and a safe target environment.

## Example user request

> Analyze this project and run the applicable NeoBram testing skills. Start with regression and functional testing, then run API or system checks if the required services are available.

The agent should inspect the project, select applicable skills, execute only permitted checks, and report evidence and limitations.
