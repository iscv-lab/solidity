import { ethers } from "hardhat";

// pnpm hardhat run scripts/employee/ListEmployeeSkillApprove.ts  --network iscv

export async function main(props: { address: string; approve: string }) {
  const [deployer] = await ethers.getSigners();
  const { address, approve } = props;
  const ListEmployeeCV = await ethers.getContractFactory("ListEmployeeCV");
  const listEmployeeCV = ListEmployeeCV.attach(address);
  const tx = await listEmployeeCV.approve(approve, { from: deployer.address });
  await tx.wait()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main({ address: "", approve: "" }).catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
