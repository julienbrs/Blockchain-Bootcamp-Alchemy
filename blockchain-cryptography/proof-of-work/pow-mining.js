const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  mempool.push(transaction);
}

/*  To make it simpler, block doesn't have software version, timestamp, previous block hash, etc..
    but just an id */
function mine() {
  let transactions = [];
  while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
    transactions.push(mempool.pop());
  }

  let hash;
  const block = { id: blocks.length, transactions };
  block.nonce = 0;
  while (true) {
    hash = SHA256(JSON.stringify(block));
    if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
      break;
    }
    block.nonce++;
  }

  blocks.push({ ...block, hash });
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
