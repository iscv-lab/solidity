import { ethers } from "hardhat";

export async function main() {
  const ListEmployee = await ethers.getContractFactory("ListEmployee");
  const listEmployee = await ListEmployee.deploy();
  return listEmployee.address;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
