# Chainforge mining walkthrough

Mining searches for a nonce whose block hash begins with the configured difficulty prefix. The block hash includes the index, previous hash, timestamp, transactions, and nonce, so changing any part invalidates the result.

The JavaScript implementation in `src/blockchain.js` is deliberately small enough to trace line by line. Run `node --test test/blockchain.test.js` to see both a successful proof of work and tamper detection.
