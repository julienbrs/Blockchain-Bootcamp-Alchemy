const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [new Block()];
  }

  addBlock(block) {
    block.previousHash = this.chain[this.chain.length - 1].toHash();
    this.chain.push(block);
  }

  isValid() {
    for (let index = 1; index < this.chain.length; index++) {
      const prevHash = this.chain[index - 1].toHash();
      if (prevHash.toString() !== this.chain[index].previousHash.toString()) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
