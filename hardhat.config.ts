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
      url: `http://103.151.241.28:8545`,
      accounts: [
        "8eddd4b3a701447cfd338917f6183302d6e592eb3c6e1428a3404d01537be894",
      ],
    },
    polygon: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [process.env.POLYGON_PRIVATE_KEY!],
    },
  },
};

export default config;
