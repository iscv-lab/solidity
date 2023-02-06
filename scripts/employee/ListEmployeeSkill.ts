import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  // console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListEmployeeSkill = await ethers.getContractFactory(
    "ListEmployeeSkill"
  );
  const listEmployeeSkill = await ListEmployeeSkill.deploy();
  console.log("Token address:", listEmployeeSkill.address);
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
