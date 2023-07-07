import { ethers } from "hardhat";

//  pnpm hardhat run scripts/employee/ListBusinessApprove.ts  --network iscv

export async function main(props: { address: string; approve: string }) {
  const [deployer] = await ethers.getSigners();
  const { address, approve } = props;
  const IIGDataApprove = await ethers.getContractFactory('IIGData');
  const iigDataApprove = IIGDataApprove.attach(address);
  const tx = await iigDataApprove.approve(approve, { from: deployer.address });
  await tx.wait()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main({ address: "", approve: "" }).catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
