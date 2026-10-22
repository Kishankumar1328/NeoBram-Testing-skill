# Usage

```bash
neobram-test --help
neobram-test --version
neobram-test analyze --project .
neobram-test test --project .
neobram-test regression --project .
neobram-test functional --project .
neobram-test api-integration --project .
neobram-test security --project .
neobram-test system --project .
neobram-test report --project .
neobram-test validate
```

The CLI reports `NOT_RUN` when no safe project-native execution command has been discovered; it does not fabricate test execution.
