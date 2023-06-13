import { ethers } from "hardhat";

export async function main() {
  const [deployer] = await ethers.getSigners();
  // console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListEmployeeCV = await ethers.getContractFactory("ListEmployeeCV");
  const listEmployeeCV = await ListEmployeeCV.deploy();
  return listEmployeeCV.address;
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
