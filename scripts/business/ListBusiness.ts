import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusiness.ts --network iscv
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  // console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListBusiness = await ethers.getContractFactory("ListBusiness");
  const listBusiness = await ListBusiness.deploy();
  console.log("Token address:", listBusiness.address);
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
