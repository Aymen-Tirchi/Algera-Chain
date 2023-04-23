# Product SupplyChain ETH

## Introduction

Product SupplyChain ETH is a decentralized supply chain management system built on top of the Ethereum blockchain. It allows manufacturers, warehouse logistics providers, delivery hubs, and customers to interact with each other in a secure and transparent manner. This system provides an immutable and transparent ledger to record all the transactions that take place in the supply chain, ensuring that all stakeholders have access to the same information.

## Installation and Setup

### Prerequisites

`npm, git`

### Clone the repository

```Bash
git clone https://github.com/Aymen-Tirchi/AlgeriaChain.git && cd AlgeriaChain
```

### Install dependencies

```Bash
npm install
```

### Configure ganache-cli

Configure ganache-cli for 10 accounts and extend gasLimit to 6721975000 and beyond, so as to have enough gas for migrating the smart contracts and a data flow for the prototype.

```Bash
ganache-cli --accounts 10 --gasLimit 6721975000
```

### Run the local node in Docker (optional)

if you want to run the ganache-cli on docker then use the following command

```Bash
docker run -d -p 8545:8545 trufflesuite/ganache-cli:latest -h 0.0.0.0 --accounts 10 --gasLimit 6721975000
```

### Open a second terminal and deploy the contracts

```Bash
npx truffle migrate --network=develop --reset
```

### Enter the client folder

```Bash
cd client
```

### Install all packages in the package.json file

```Bash
npm install
```

### Setup an .env file

create .env file and enter the google maps api key and set the react rpc port to 8545 since the ganache-cli runs on the same port by default. The final .env file must look like this

```bash
REACT_APP_GOOGLE_MAP_API_KEY=*************************
REACT_APP_RPC=http://127.0.0.1:8545/
```

### Run the app

```Bash
npm start
```

The app gets hosted by default at port 3000.

### Known Issues

The app may produce warnings during development. These warnings can be resolved by following the instructions provided in the console.
