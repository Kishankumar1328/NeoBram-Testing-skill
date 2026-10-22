import fs from 'node:fs/promises';
import path from 'node:path';

const manifests = ['package.json', 'pyproject.toml', 'Cargo.toml', 'go.mod', 'pom.xml', 'requirements.txt'];
const testMarkers = ['pytest.ini', 'tox.ini', 'jest.config.js', 'vitest.config.js', 'playwright.config.js', 'cypress.config.js'];

export async function discoverProject(projectPath) {
  const absolute = path.resolve(projectPath);
  const entries = await fs.readdir(absolute, { withFileTypes: true });
  const names = new Set(entries.map((entry) => entry.name));
  return {
    projectPath: absolute,
    manifests: manifests.filter((name) => names.has(name)),
    testConfigurations: testMarkers.filter((name) => names.has(name)),
    directories: entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort(),
    files: entries.filter((entry) => entry.isFile()).map((entry) => entry.name).sort()
  };
}
