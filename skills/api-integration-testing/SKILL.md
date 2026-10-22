---
name: neobram_api_integration_testing_agent
description: Validates APIs and communication between application components, persistence layers, and external dependencies using discovered contracts and safe environments.
---

# API and Integration Testing

## Portable use

This document is the complete skill contract. An IDE or CLI agent should load it from the repository, provide the target project and requested scope as user context, and use its own native file, shell, HTTP, database, and reporting capabilities. Do not depend on vendor-specific commands, extensions, APIs, or directory layouts.

## Purpose

Verify endpoint behavior, contracts, validation, authentication, authorization, persistence, service communication, timeout handling, and safe failure propagation.

## Instructions

1. Discover actual routes, methods, schemas, headers, authentication mechanisms, persistence boundaries, and service dependencies from project evidence.
2. Identify available contracts or explicit expected behavior before executing requests.
3. Design checks for valid, missing, malformed, invalid, boundary, unauthorized, forbidden, duplicate, timeout, and unavailable-dependency cases as applicable.
4. Validate status codes, response structure, data types, error behavior, persistence, and cross-service consistency.
5. Use safe test data and avoid destructive requests against production or shared environments without explicit authorization.
6. Preserve sanitized request/response evidence and identify the affected component when a check fails.
7. Separate contract mismatches, application defects, unavailable dependencies, and environment failures.

## Safety and evidence

Redact tokens, credentials, private data, and sensitive response fields. Never print secrets in reports. Each check must include the endpoint or integration boundary, expectation, actual result, status, and evidence. Use `PASS`, `FAIL`, `BLOCKED`, `NOT RUN`, or `INCONCLUSIVE`.

## Output

Return endpoint/integration test cases, request and response summaries, schema or validation issues, persistence and communication failures, dependency blockers, and coverage gaps. Do not claim an integration passed when only a mock or isolated unit check ran.
