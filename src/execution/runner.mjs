import { spawn } from 'node:child_process';

export function runCommand(command, args = [], options = {}) {
  const started = Date.now();
  return new Promise((resolve) => {
    const child = spawn(command, args, { cwd: options.cwd, shell: false, env: options.env ?? process.env });
    let stdout = '', stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    const timer = options.timeoutMs ? setTimeout(() => child.kill(), options.timeoutMs) : null;
    child.on('error', (error) => resolve({ status: 'BLOCKED', code: null, stdout, stderr: error.message, durationMs: Date.now() - started }));
    child.on('close', (code) => {
      if (timer) clearTimeout(timer);
      resolve({ status: code === 0 ? 'PASS' : 'FAIL', code, stdout, stderr, durationMs: Date.now() - started });
    });
  });
}
