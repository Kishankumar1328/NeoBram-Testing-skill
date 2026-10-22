---
name: testing-skill
description: Orchestrates the five independent NeoBram testing skills without duplicating their platform-neutral instructions.
---

# Testing Skill Orchestrator

## Purpose

Coordinate project-aware software testing by selecting and invoking only the specialized skills relevant to the user's request and the discovered project.

## Portable use

This file is the platform-neutral orchestration contract. An IDE or CLI agent loads it from the repository and uses its native inspection, execution, browser, HTTP, database, and reporting capabilities. It must not assume a vendor-specific command, API, extension, operating system, shell, language, framework, or test runner.

## Available skills

Load the canonical skill file only when its capability is relevant:

- `regression-testing/SKILL.md` — behavior affected by changes.
- `functional-testing/SKILL.md` — features and business workflows.
- `api-integration-testing/SKILL.md` — APIs and component boundaries.
- `security-testing/SKILL.md` — authorized, bounded security checks.
- `system-testing/SKILL.md` — integrated end-to-end behavior.

The plugin entrypoint and manifest are available at `neobram-testing-plugin/PLUGIN.md` and `neobram-testing-plugin/manifest.json`.

## Orchestration workflow

1. Inspect repository guidance, project structure, dependencies, configuration, existing tests, interfaces, services, and the user's requested scope.
2. Identify execution prerequisites, authorization boundaries, safe environments, and unavailable dependencies.
3. Select the smallest relevant set of specialized skills. Do not run every category blindly.
4. Load each selected skill and follow its complete instructions.
5. Execute independent checks in a risk-appropriate order, preserving evidence and sanitized diagnostics.
6. Continue safe checks when another category is blocked; do not hide or reinterpret the blocker.
7. Consolidate results without changing individual statuses or overstating coverage.

## Shared orchestration rules

- Preserve application code unless the user explicitly authorizes implementation changes.
- Prefer project-native test tools, fixtures, environments, and commands discovered during inspection.
- Never expose secrets or sensitive data in evidence.
- Require authorization for security testing and potentially destructive activity.
- Report `PASS`, `FAIL`, `BLOCKED`, `NOT RUN`, and `INCONCLUSIVE` exactly as produced by the selected skills.
- Distinguish verified findings, hypotheses, baseline failures, and environmental limitations.
- Do not claim the complete system passed when critical checks were skipped or only isolated checks executed.

## Consolidated output

Return:

1. project and environment summary;
2. requested scope and selected skills;
3. per-skill checks and statuses;
4. defects with severity, evidence, and reproduction guidance;
5. security findings when authorized;
6. blockers, skipped checks, and coverage gaps;
7. recommended corrective actions;
8. overall quality assessment and release recommendation with explicit limitations.

## Completion criteria

The orchestration is complete only when project discovery, skill selection, execution attempts, status aggregation, evidence handling, and limitations have all been recorded. If a prerequisite or authorization is missing, report the affected skill as blocked and continue only with safe independent work.
