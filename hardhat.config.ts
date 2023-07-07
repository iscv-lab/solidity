import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    iscv: {
      url: `https://chain.iscv.ftisu.vn`,
      accounts: [process.env.WALLET_PRIVATE_KEY!],
    },
    polygon: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [process.env.POLYGON_PRIVATE_KEY!],
    },
  },
};

export default config;
