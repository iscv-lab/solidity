import { ethers } from "hardhat";

// pnpm hardhat run scripts/employee/ListEmployeeApprove.ts  --network iscv

const address = "0x2c239CB7Eedd94613f1780a2A996db4f7f3B52f5";
const approve = "0x7b43cAb6B30ca97B3C767d3fd550F233A39CA633";

async function main() {
  const [deployer] = await ethers.getSigners();
  //   console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListEmployee = await ethers.getContractFactory("ListEmployee");
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
