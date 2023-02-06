import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusinessAppointment.ts --network iscv

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  // console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListBusinessAppointment = await ethers.getContractFactory(
    "ListBusinessAppointment"
  );
  const listBusinessAppointment = await ListBusinessAppointment.deploy();
  console.log("Token address:", listBusinessAppointment.address);
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
