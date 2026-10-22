export function createReport({ project, scope, results = [], findings = [] }) {
  const counts = Object.fromEntries(['PASS', 'FAIL', 'BLOCKED', 'NOT_RUN', 'INCONCLUSIVE'].map((status) => [status, results.filter((result) => result.status === status).length]));
  return [
    '# NeoBram Testing Report', '',
    `- Project: ${project.projectPath}`,
    `- Scope: ${scope}`,
    `- Generated: ${new Date().toISOString()}`, '',
    '## Result counts', '',
    ...Object.entries(counts).map(([status, count]) => `- ${status}: ${count}`), '',
    '## Project discovery', '',
    `- Manifests: ${project.manifests.join(', ') || 'none discovered'}`,
    `- Test configuration: ${project.testConfigurations.join(', ') || 'none discovered'}`, '',
    '## Findings', '',
    ...(findings.length ? findings.map((finding) => `- ${finding}`) : ['- None recorded.']), '',
    '## Limitations', '',
    '- Results represent only checks executed in the current environment.',
    '- Unavailable services, credentials, and host capabilities must remain BLOCKED or NOT_RUN.'
  ].join('\n');
}
