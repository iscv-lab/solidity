import { ethers } from "hardhat";

// pnpm hardhat run scripts/employee/EmployeeController.ts --network iscv

const listEmployeeAddress = "0x2c239CB7Eedd94613f1780a2A996db4f7f3B52f5";
const listEmployeeSkillAddress = "0xf052CBF6F27523b423B2028F857C719F777aA01D";
const listEmployeeApplyAddress = "0xAfcD162EbA39B117d669bC5dF874bd6Eb55e405A";
const listEmployeeAppointmenAddress =
  "0x5492D655c6469AD07948eB562F414AefA6cC40a0";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const EmployeeController = await ethers.getContractFactory(
    "EmployeeController"
  );
  const employeeController = await EmployeeController.deploy(
    listEmployeeAddress,
    listEmployeeSkillAddress,
    listEmployeeApplyAddress,
    listEmployeeAppointmenAddress
  );
  console.log("Token address:", employeeController.address);
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
