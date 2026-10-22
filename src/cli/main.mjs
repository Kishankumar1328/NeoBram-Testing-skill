import fs from 'node:fs/promises';
import path from 'node:path';
import { discoverProject } from '../discovery/project.mjs';
import { createReport } from '../reporting/report.mjs';
import { root } from '../utils/paths.mjs';

const version = '1.0.0';
const skills = { regression: 'regression-testing', functional: 'functional-testing', 'api-integration': 'api-integration-testing', security: 'security-testing', system: 'system-testing' };

function help() {
  console.log(`NeoBram Testing CLI v${version}\n\nUsage: neobram-test <command> [--project <path>] [--output <path>]\n\nCommands: analyze, test, regression, functional, api-integration, security, system, report, validate`);
}

function argsOf(argv) {
  const values = { command: argv[0], project: process.cwd(), output: null };
  if (argv[0] === '--help' || argv[0] === '-h') values.help = true;
  if (argv[0] === '--version') values.version = true;
  for (let i = 1; i < argv.length; i += 1) {
    if (argv[i] === '--project') values.project = argv[++i];
    else if (argv[i] === '--output') values.output = argv[++i];
    else if (argv[i] === '--help' || argv[i] === '-h') values.help = true;
    else if (argv[i] === '--version') values.version = true;
    else throw new Error(`Unknown option: ${argv[i]}`);
  }
  return values;
}

async function validate() {
  const manifest = JSON.parse(await fs.readFile(path.join(root, '.codex-plugin', 'plugin.json'), 'utf8'));
  if (!manifest.name || !manifest.version || manifest.skills !== './skills/') throw new Error('Invalid Codex plugin manifest');
  const names = Object.values(skills);
  for (const name of names) {
    const file = path.join(root, 'skills', name, 'SKILL.md');
    const text = await fs.readFile(file, 'utf8');
    if (!text.startsWith('---') || !/^name:\s*neobram_.+_agent/m.test(text)) throw new Error(`Invalid skill metadata: ${name}`);
  }
  console.log('Plugin validation passed: manifest and five skills are valid.');
}

export async function main(argv) {
  try {
    const options = argsOf(argv);
    if (options.help || !options.command) { help(); return 0; }
    if (options.version) { console.log(version); return 0; }
    if (options.command === 'validate') { await validate(); return 0; }
    const project = await discoverProject(options.project);
    if (options.command === 'analyze') { console.log(JSON.stringify(project, null, 2)); return 0; }
    if (!(options.command in skills) && !['test', 'report'].includes(options.command)) throw new Error(`Unknown command: ${options.command}`);
    const scope = options.command === 'test' ? 'orchestrated testing' : options.command;
    const report = createReport({ project, scope, results: [{ status: 'NOT_RUN' }], findings: ['No project-native test command was inferred; inspect the discovered project before execution.'] });
    if (options.output) await fs.writeFile(path.resolve(options.output), report, 'utf8'); else console.log(report);
    return 0;
  } catch (error) {
    console.error(`neobram-test: ${error.message}`);
    return 2;
  }
}
