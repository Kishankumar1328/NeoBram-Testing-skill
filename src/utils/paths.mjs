import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const pluginManifest = path.join(root, '.codex-plugin', 'plugin.json');
