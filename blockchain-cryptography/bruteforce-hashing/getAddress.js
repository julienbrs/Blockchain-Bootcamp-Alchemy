const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  const slicedPublicKey = publicKey.slice(1); // removing the byte format of public key
  const hashed = keccak256(slicedPublicKey);
  const address = hashed.slice(-20);
  return address;
}

module.exports = getAddress;
