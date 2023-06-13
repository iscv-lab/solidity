import { ethers } from "hardhat";

// pnpm hardhat run scripts/employee/EmployeeController.ts --network iscv

export async function main(props: {
  listEmployeeAddress: string;
  listEmployeeCVAddress: string;
}) {
  const EmployeeCVController = await ethers.getContractFactory(
    "EmployeeCVController"
  );
  const { listEmployeeAddress, listEmployeeCVAddress } = props;
  const employeeController = await EmployeeCVController.deploy(
    listEmployeeAddress,
    listEmployeeCVAddress
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
