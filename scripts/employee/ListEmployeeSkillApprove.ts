import { ethers } from "hardhat";

// pnpm hardhat run scripts/employee/ListEmployeeSkillApprove.ts  --network iscv

const address = "0xf052CBF6F27523b423B2028F857C719F777aA01D";
const approve = "0x7b43cAb6B30ca97B3C767d3fd550F233A39CA633";

async function main() {
  const [deployer] = await ethers.getSigners();
  //   console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListEmployee = await ethers.getContractFactory("ListEmployeeSkill");
  const listEmployee = ListEmployee.attach(address);
  listEmployee.approve(approve, { from: deployer.address });
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
