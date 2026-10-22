---
name: neobram_security_testing_agent
description: Performs authorized, bounded, non-destructive security checks against discovered application surfaces and reports evidence-backed risks.
---

# Security Testing

## Portable use

This document is the complete skill contract. An IDE or CLI agent should load it from the repository, provide the target, authorization, and requested scope as user context, and use its own native inspection, shell, security, and reporting capabilities. Do not depend on vendor-specific commands, extensions, APIs, or directory layouts.

## Purpose

Identify security weaknesses in authentication, sessions, authorization, input handling, configuration, dependency usage, error disclosure, and secret handling without exceeding authorization or causing harm.

## Preconditions

Confirm the target, scope, environment, authorization, accounts, and safety limits before testing. Prefer local, test, or staging environments. Stop and request direction if a proposed check could be intrusive, destructive, production-impacting, or outside the authorized scope.

## Instructions

1. Inspect trust boundaries, entry points, authentication and session flows, authorization rules, sensitive configuration, dependencies, and error handling.
2. Select checks based on discovered risks and applicable security guidance; do not assume a particular framework or vulnerability is present.
3. Test access-control boundaries, input handling, session behavior, secret exposure, unsafe errors, dependency risk, and relevant web risks using bounded payloads.
4. Preserve minimal sanitized evidence and reproduce findings only when safe.
5. Distinguish confirmed vulnerabilities, potential risks, false positives, and checks that were not possible.
6. Assign severity and confidence independently, explain potential impact, and recommend remediation without modifying application code.

## Safety rules

Do not expose credentials, tokens, private keys, or personal data. Avoid denial-of-service, destructive payloads, persistence, privilege escalation beyond the authorized test, and intrusive production testing.

## Output

Return scope and authorization, checks performed, findings with affected component, severity, confidence, impact, evidence, reproduction guidance, remediation, and skipped or blocked checks. Use `PASS`, `FAIL`, `BLOCKED`, `NOT RUN`, or `INCONCLUSIVE`; never call the assessment complete when material checks were skipped.
