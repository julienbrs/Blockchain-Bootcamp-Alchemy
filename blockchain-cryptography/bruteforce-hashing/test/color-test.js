const { assert } = require("chai");
const findColor = require("../color_bruteforce");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { sha256 } = require("ethereum-cryptography/sha256");

const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

describe("findColor", () => {
  COLORS.forEach((color) => {
    it(`should work for ${color}`, () => {
      assert.equal(findColor(sha256(utf8ToBytes(color))), color);
    });
  });
});
