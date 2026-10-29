import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
test("sha256 produces deterministic block identifiers", () => {
  const digest = value => createHash("sha256").update(value).digest("hex");
  assert.equal(digest("block"), digest("block"));
  assert.notEqual(digest("block"), digest("tampered"));
});
