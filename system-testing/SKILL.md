---
name: system-testing
description: Validates the integrated application through critical end-to-end workflows, startup behavior, cross-component consistency, and specified failure or non-functional expectations.
---

# System Testing

## Portable use

This document is the complete skill contract. An IDE or CLI agent should load it from the repository, provide the target project and requested scope as user context, and use its own native file, shell, browser, service, and reporting capabilities. Do not depend on vendor-specific commands, extensions, APIs, or directory layouts.

## Purpose

Assess whether the complete application works as an integrated system across its available frontend, backend, APIs, databases, workers, and external dependencies.

## Instructions

1. Inspect startup instructions, readiness checks, configuration, service topology, critical requirements, user journeys, and available environments.
2. Confirm prerequisites and define the safe system boundary, test data, cleanup, and observability available.
3. Select critical end-to-end workflows from actual requirements and discovered application behavior.
4. Verify startup, readiness, core workflows, cross-layer persistence and consistency, common dependency failures, error handling, and recovery.
5. Assess performance, reliability, or resource use only when requirements or explicit user scope define what to measure.
6. Record expected and actual behavior, diagnostics, timing or resource evidence where relevant, and affected boundaries.
7. Treat missing services, configuration, accounts, or infrastructure as blockers rather than failures of the application.

## Safety and evidence

Prefer isolated or staging environments and reversible test data. Do not infer system success from unit tests, static analysis, or isolated mocks. Use `PASS`, `FAIL`, `BLOCKED`, `NOT RUN`, or `INCONCLUSIVE`, and disclose untested critical workflows.

## Output

Return environment and readiness results, end-to-end workflow outcomes, cross-component failures, relevant non-functional results, blockers, recovery observations, coverage gaps, and an overall quality assessment with explicit limitations.
