const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const path = require("path");
module.exports = {
    contracts_build_directory: path.join(__dirname, "client/src/contracts"),
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        dashboard: {
            port: 24012,
        },
        // "inf_Minting_dapp_kovan": {
        //     network_id: 42,
        //     gasPrice: 0,
        //     provider: new HDWalletProvider(fs.readFileSync('/Users/mac/Documents/NFT-Dev/contracts/Ethereum-Polygone/Minting Dapp/Untitled.env', 'utf-8'), "https://kovan.infura.io/v3/eb520e7a78a6472ea10807135ddadb47")
        // }
    },
    mocha: {},
    compilers: {
        solc: {
            version: "0.8.13"
        }
    },
    db: {
        enabled: false
    }
};