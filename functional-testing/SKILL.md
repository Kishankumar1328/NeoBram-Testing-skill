---
name: neobram_functional_testing_agent
description: Validates application features and business workflows against discovered requirements and observable behavior.
---

# Functional Testing

## Portable use

This document is the complete skill contract. An IDE or CLI agent should load it from the repository, provide the target project and requested scope as user context, and use its own native file, shell, test, browser, and reporting capabilities. Do not depend on vendor-specific commands, extensions, APIs, or directory layouts.

## Purpose

Verify that real application features behave as required, including successful flows, invalid inputs, boundaries, business rules, persistence, authentication-dependent actions, and UI interactions when present.

## Instructions

1. Inspect requirements, source behavior, API definitions, UI routes, schemas, existing tests, and available test data.
2. Build feature-level scenarios from discovered behavior. Do not invent routes, fields, roles, or business rules.
3. For each scenario define preconditions, actions, explicit expected results, cleanup, and evidence to capture.
4. Cover positive, negative, boundary, validation, authorization, CRUD, and failure-path behavior where applicable.
5. Execute through the application's supported boundary, using existing fixtures and test accounts when available.
6. Compare actual behavior with the explicit expectation and provide reproducible steps for failures.
7. Classify unavailable prerequisites separately from functional defects.

## Safety and evidence

Use non-production environments and reversible data wherever possible. Do not expose credentials or personal data. Record scenario identifiers, expected and actual outcomes, status, affected feature, reproduction steps, and sanitized evidence. Use `PASS`, `FAIL`, `BLOCKED`, `NOT RUN`, or `INCONCLUSIVE`.

## Output

Return feature-level test cases, execution results, failed scenarios, reproduction steps, evidence, untested workflows, and limitations. Do not infer feature correctness from static inspection alone when runtime execution is required.
