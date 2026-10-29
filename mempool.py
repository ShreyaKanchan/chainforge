"""A tiny transaction pool with deterministic ordering for the demo chain."""
class Mempool:
    def __init__(self, capacity=100): self.capacity, self._items = capacity, {}
    def add(self, tx_id, transaction):
        if len(self._items) >= self.capacity and tx_id not in self._items: raise ValueError("mempool full")
        self._items[tx_id] = transaction
    def take(self, limit=10):
        ids = sorted(self._items)[:limit]
        return [self._items.pop(tx_id) for tx_id in ids]
