"""Educational hash-linked chain; not production consensus software."""
from dataclasses import dataclass, asdict
import hashlib, json, time

@dataclass
class Block:
    index: int
    timestamp: float
    transactions: list
    previous_hash: str
    nonce: int = 0

    def digest(self):
        payload = json.dumps(asdict(self), sort_keys=True, separators=(",", ":"))
        return hashlib.sha256(payload.encode()).hexdigest()

    def mine(self, difficulty=3):
        target = "0" * difficulty
        while not self.digest().startswith(target):
            self.nonce += 1
        return self.digest()

def valid_chain(chain):
    return all(block.previous_hash == chain[i-1].digest() and
               block.digest().startswith("0" * 3)
               for i, block in enumerate(chain[1:], 1))

if __name__ == "__main__":
    genesis = Block(0, time.time(), [], "0")
    genesis.mine()
    chain = [genesis]
    next_block = Block(1, time.time(), [{"from": "alice", "to": "bob", "amount": 2}], genesis.digest())
    print("mined:", next_block.mine())
    chain.append(next_block)
    print("valid:", valid_chain(chain), "height:", len(chain))
