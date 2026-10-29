import unittest
from chainforge import Block, valid_chain

class ChainTests(unittest.TestCase):
    def test_tampering_is_detected(self):
        first = Block(0, 1, [], "0"); first.mine()
        second = Block(1, 2, [{"amount": 1}], first.digest()); second.mine()
        chain = [first, second]
        self.assertTrue(valid_chain(chain))
        second.transactions[0]["amount"] = 99
        self.assertFalse(valid_chain(chain))

if __name__ == "__main__": unittest.main()
