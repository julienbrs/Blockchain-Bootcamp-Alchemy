const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
  const bytesMessage = utf8ToBytes(message);
  const hashMessage = keccak256(bytesMessage);
  return hashMessage;
}

module.exports = hashMessage;
