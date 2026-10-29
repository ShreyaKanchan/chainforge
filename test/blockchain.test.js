import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidChain, mineBlock } from '../src/blockchain.js';

test('mines a block satisfying the difficulty target', () => {
  const block = mineBlock({ index: 0, previousHash: '0'.repeat(64), transactions: ['alice -> bob'], difficulty: 2, now: () => 1 });
  assert.match(block.hash, /^00/);
});

test('detects tampering and preserves links', () => {
  const first = mineBlock({ index: 0, previousHash: '0'.repeat(64), difficulty: 1, now: () => 1 });
  const second = mineBlock({ index: 1, previousHash: first.hash, difficulty: 1, now: () => 2 });
  assert.equal(isValidChain([first, second]), true);
  second.transactions.push('tampered');
  assert.equal(isValidChain([first, second]), false);
});
