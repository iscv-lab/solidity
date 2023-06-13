import { ethers } from "hardhat";

//  pnpm hardhat run scripts/employee/ListBusinessApprove.ts  --network iscv

export async function main(props: { address: string; approve: string }) {
  const [deployer] = await ethers.getSigners();
  const { address, approve } = props;
  const ListIIGSWResult = await ethers.getContractFactory("ListIIGSWResult");
  const listIIGSWResult = ListIIGSWResult.attach(address);
  await listIIGSWResult.approve(approve, { from: deployer.address });
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main({ address: "", approve: "" }).catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
