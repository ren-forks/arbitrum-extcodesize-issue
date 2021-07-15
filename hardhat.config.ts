import { HardhatUserConfig } from "hardhat/types";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
        version: "0.8.6",
    },
    networks: {
        hardhat: {},
        goerli: {
            url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
            accounts: {
                mnemonic: process.env.MNEMONIC_TESTNET,
            },
        },
        arbitrumTestnet: {
            url: `https://rinkeby.arbitrum.io/rpc`,
            accounts: {
                mnemonic: process.env.MNEMONIC_TESTNET,
            },
            gasPrice: 0, // https://developer.offchainlabs.com/docs/contract_deployment
        },
    },
};

export default config;
