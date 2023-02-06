import { ethers } from "hardhat";

export async function main() {
  // console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListBusinessApply = await ethers.getContractFactory(
    "ListBusinessApply"
  );
  const listBusinessApply = await ListBusinessApply.deploy();
  return listBusinessApply.address;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
