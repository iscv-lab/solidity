import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusinessAppointmentApprove.ts --network iscv

export async function main(props: { address: string; approve: string }) {
  const [deployer] = await ethers.getSigners();
  const { address, approve } = props;
  const ListBusinessPost = await ethers.getContractFactory("ListBusinessPost");
  const listBusinessPost = ListBusinessPost.attach(address);
  listBusinessPost.approve(approve, { from: deployer.address });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main({ address: "", approve: "" }).catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
