const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("HumanRegistryModule", (m) => {
  const humanRegistry = m.contract("HumanRegistry");
  return { humanRegistry };
});
