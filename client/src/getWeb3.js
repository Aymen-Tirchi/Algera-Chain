import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      try {
        const provider = new Web3.providers.HttpProvider(
          process.env.REACT_APP_RPC
        );
        const web3 = new Web3(provider);
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    });
  });

export default getWeb3;
