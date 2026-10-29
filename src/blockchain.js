import { createHash } from 'node:crypto';

export function hashBlock(block) {
  const payload = JSON.stringify({
    index: block.index,
    previousHash: block.previousHash,
    timestamp: block.timestamp,
    transactions: block.transactions,
    nonce: block.nonce,
  });
  return createHash('sha256').update(payload).digest('hex');
}

export function mineBlock({ index, previousHash, transactions = [], difficulty = 2, now = Date.now }) {
  const prefix = '0'.repeat(difficulty);
  let nonce = 0;
  let block;
  do {
    block = { index, previousHash, timestamp: now(), transactions, nonce };
    block.hash = hashBlock(block);
    nonce += 1;
  } while (!block.hash.startsWith(prefix));
  return block;
}

export function isValidChain(chain) {
  return chain.every((block, index) => {
    if (block.hash !== hashBlock(block)) return false;
    if (index === 0) return block.previousHash === '0'.repeat(64);
    return block.previousHash === chain[index - 1].hash;
  });
}
