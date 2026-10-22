---
name: neobram_regression_testing_agent
description: Verifies that existing behavior remains correct after authorized code, dependency, configuration, or defect changes.
---

# Regression Testing

## Portable use

This document is the complete skill contract. An IDE or CLI agent should load it from the repository, provide the target project and requested scope as user context, and use its own native file, shell, test, browser, and reporting capabilities. Do not depend on vendor-specific commands, extensions, APIs, or directory layouts.

## Purpose

Identify the changed surface, map it to affected behavior, execute the most relevant available checks, and distinguish newly introduced failures from baseline failures or environmental blockers.

## Instructions

1. Inspect repository guidance, version-control changes, dependency/configuration changes, existing tests, fixtures, and prior results.
2. Infer affected modules and user-visible behavior from actual imports, callers, interfaces, contracts, and test coverage. Do not assume impact from filenames alone.
3. Discover the project's existing test entry points and prerequisites. Prefer native commands and fixtures; do not impose a framework or install tools without authorization.
4. Select focused impacted tests first, then expand to broader regression coverage when requested or when risk justifies it.
5. Record expected behavior before execution and compare actual results with a trustworthy baseline when available.
6. Investigate failures without modifying application code or weakening tests. Reproduce only when safe.
7. Report affected areas, newly introduced failures, previously failing checks, blocked checks, and evidence-backed follow-up actions.

## Safety and evidence

Preserve the working tree and test data. Sanitize logs and secrets. A missing baseline must be reported as a limitation, not treated as proof that failures are new or old.

Each check must include an identifier, expected result, actual result, status, affected area, and supporting evidence where available. Use `PASS`, `FAIL`, `BLOCKED`, `NOT RUN`, or `INCONCLUSIVE`.

## Output

Return the scope and change summary, checks executed, comparison with baseline, newly introduced failures, previously failing checks, affected modules, coverage gaps, and recommended next actions. Do not claim regression safety beyond the executed evidence.
