const path = require("path");

module.exports = {
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
      version: "0.8.4",
    },
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // match any network
      //chainId: 1337,
      websockets: true,
    },
  },
};
