var SupplyChainContract = artifacts.require("./SupplyChain.sol");
var RolesContract = artifacts.require("./rolesUtils/Roles.sol");
var ManufacturerContract = artifacts.require("./rolesUtils/Manufacturer.sol");

module.exports = function (deployer) {
  deployer.deploy(ManufacturerContract);
  deployer.deploy(RolesContract);
  deployer.deploy(SupplyChainContract, { gas: 6721975 });
  // deployer.deploy(FetchContract, {gas: 15555555});
};
