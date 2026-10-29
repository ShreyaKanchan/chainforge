# ChainForge

> A compact proof-of-work blockchain built from first principles for learning how blocks, hashes, transactions, and validation fit together.

![ChainForge](assets/logo.svg)

A minimal proof-of-work blockchain implemented from scratch for learning.

## Run

```bash
python3 chainforge.py
```

This demonstrates hashing, mining, block linking, and chain validation. It intentionally omits networking, persistence, signatures, and production consensus safeguards.

## Design

Transactions are stored as JSON-like dictionaries inside blocks. Each block commits to the previous block hash, while mining searches for a nonce that produces a configurable prefix. `valid_chain` recalculates links and proof-of-work so tampering is detectable.

## Roadmap

Add signed transactions, a mempool, peer discovery, persistent storage, chain selection, and property-based tests before treating this as anything beyond a learning implementation.
