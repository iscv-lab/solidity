import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusinessPost.ts --network iscv

export async function main() {
  const [deployer] = await ethers.getSigners();
  const ListBusinessPost = await ethers.getContractFactory("ListBusinessPost");
  const listBusinessPost = await ListBusinessPost.deploy();
  return listBusinessPost.address
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
