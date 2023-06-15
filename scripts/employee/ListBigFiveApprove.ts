import { ethers } from "hardhat";

// pnpm hardhat run scripts/employee/ListEmployeeApprove.ts  --network iscv

export async function main(props: { address: string; approve: string }) {
  const [deployer] = await ethers.getSigners();
  const { address, approve } = props;
  const ListBigFive = await ethers.getContractFactory("ListBigFive");
  const listBigFive = ListBigFive.attach(address);
  await listBigFive.approve(approve, { from: deployer.address });
}
