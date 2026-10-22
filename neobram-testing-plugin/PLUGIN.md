---
name: neobram-testing
description: Portable testing plugin that exposes five project-aware testing skills to IDE and CLI coding agents.
---

# NeoBram Testing Plugin

## Load contract

An agent loads this file as the portable-bundle entrypoint, reads `manifest.json`, and loads only the skill documents relevant to the user's request. Resolve every manifest path relative to the repository root, as declared by `pathBase`; the supported distribution is the complete repository, not an isolated copy of `neobram-testing-plugin`. The agent supplies the target project, scope, permissions, and environment as runtime context. The bundle does not assume a particular IDE, CLI, operating system, language, framework, test runner, browser, database, or shell.

## Available skills

- `neobram_regression_testing_agent`: checks behavior affected by changes.
- `neobram_functional_testing_agent`: checks features and business workflows.
- `neobram_api_integration_testing_agent`: checks APIs and component boundaries.
- `neobram_security_testing_agent`: performs authorized, bounded security checks.
- `neobram_system_testing_agent`: checks integrated end-to-end behavior.

## Invocation contract

When the user requests testing:

1. Inspect the target project and repository instructions.
2. Read the relevant skill document from the manifest.
3. Select checks based on discovered project evidence and user scope.
4. Use the host agent's native tools for file inspection, command execution, browser control, HTTP requests, database access, and reporting.
5. Preserve the skill's safety, evidence, status, and reporting rules.

The host agent may expose this bundle through its own rules, skill loader, command palette, extension mechanism, or CLI configuration. This repository does not provide automatic host-specific adapters. Do not require a vendor-specific command or API from the bundle itself. Runtime compatibility with a host must be validated by loading the entrypoint and executing a safe sample-project check; the manifest alone is not proof of compatibility.

## Safety contract

Testing must remain within the user's authorization and environment scope. Do not expose secrets, perform destructive or denial-of-service activity, modify application code without authorization, or report unexecuted checks as successful.

## Result contract

Every check must report an explicit expectation, actual result when executed, one of `PASS`, `FAIL`, `BLOCKED`, `NOT RUN`, or `INCONCLUSIVE`, and supporting sanitized evidence when available.
