import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    iscv: {
      url: `https://ganache.ftisu.vn/`,
      accounts: [
        "0db507968e1901d170f37bd2e37a59e77584f07e4ab92548abb3af95dac340d5",
      ],
    },
  },
};

export default config;
