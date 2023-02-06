import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusinessAppointment.ts --network iscv

export async function main() {
  // console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListBusinessAppointment = await ethers.getContractFactory(
    "ListBusinessAppointment"
  );
  const listBusinessAppointment = await ListBusinessAppointment.deploy();
  return listBusinessAppointment.address;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });