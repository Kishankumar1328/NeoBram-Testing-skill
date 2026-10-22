import test from 'node:test';
import assert from 'node:assert/strict';
import { main } from '../src/cli/main.mjs';

test('validate command succeeds', async () => { assert.equal(await main(['validate']), 0); });
test('help command succeeds', async () => { assert.equal(await main(['--help']), 0); });
test('analyze command succeeds for repository', async () => { assert.equal(await main(['analyze', '--project', '.']), 0); });
