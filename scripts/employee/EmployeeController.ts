import { ethers } from "hardhat";

// pnpm hardhat run scripts/employee/EmployeeController.ts --network iscv

export async function main(props: {
  listEmployeeAddress: string;
  listEmployeeSkillAddress: string;
  listBusinessApplyAddress: string;
}) {
  const EmployeeController = await ethers.getContractFactory(
    "EmployeeController"
  );
  const {
    listEmployeeAddress,
    listEmployeeSkillAddress,
    listBusinessApplyAddress,
  } = props;
  const employeeController = await EmployeeController.deploy(
    listEmployeeAddress,
    listEmployeeSkillAddress,
    listBusinessApplyAddress,
  );
  return employeeController.address;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main({
//   listEmployeeAddress: "",
//   listEmployeeSkillAddress: "",
//   listBusinessApplyAddress: "",
//   listBusinessAppointmenAddress: "",
// }).catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
