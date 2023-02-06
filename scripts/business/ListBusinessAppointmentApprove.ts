import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusinessAppointmentApprove.ts --network iscv

const address = "0x5492D655c6469AD07948eB562F414AefA6cC40a0";
const approve = "0x7b43cAb6B30ca97B3C767d3fd550F233A39CA633";

async function main() {
  const [deployer] = await ethers.getSigners();
  //   console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListBusinessAppointment = await ethers.getContractFactory(
    "ListBusinessAppointment"
  );
  const listBusinessAppointment = ListBusinessAppointment.attach(address);
  listBusinessAppointment.approve(approve, { from: deployer.address });
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
