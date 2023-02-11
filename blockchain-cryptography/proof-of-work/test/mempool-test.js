const { assert } = require("chai");
const { addTransaction, mempool, mine, blocks } = require("../mempool.js");
const SHA256 = require("crypto-js/sha256");

describe("addTransaction", () => {
  it("should add the transaction to the mempool", () => {
    const transaction = { to: "bob", sender: "alice" };
    addTransaction(transaction);
    assert.equal(mempool.length, 1);
    assert.equal(mempool[0], transaction);
  });
});

describe("mine", () => {
  describe("first block", () => {
    let hash;
    before(() => {
      hash = mine();
    });
    it("should add to the blocks", () => {
      assert.equal(blocks.length, 1);
    });
    it("should return the expected hash", () => {
      const expectedHash = SHA256(JSON.stringify({ id: 0 }));
      const lastBlock = blocks[blocks.length - 1];
      assert(lastBlock.hash, "did not find a hash property on the block");
      assert.equal(lastBlock.hash.toString(), expectedHash.toString());
    });
  });
  describe("second block", () => {
    let hash;
    before(() => {
      hash = mine();
    });
    it("should add to the blocks", () => {
      assert.equal(blocks.length, 2);
    });
    it("should return the expected hash", () => {
      const expectedHash = SHA256(JSON.stringify({ id: 1 }));
      const lastBlock = blocks[blocks.length - 1];
      assert(lastBlock.hash, "did not find a hash property on the block");
      assert.equal(lastBlock.hash.toString(), expectedHash.toString());
    });
  });
});
