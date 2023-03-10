import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusinessAppointmentApprove.ts --network iscv

export async function main(props: { address: string; approve: string }) {
  const [deployer] = await ethers.getSigners();
  const { address, approve } = props;
  const ListBusinessAppointment = await ethers.getContractFactory(
    "ListBusinessAppointment"
  );
  const listBusinessAppointment = ListBusinessAppointment.attach(address);
  listBusinessAppointment.approve(approve, { from: deployer.address });
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main({ address: "", approve: "" }).catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
