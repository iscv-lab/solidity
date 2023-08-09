import { ethers } from "hardhat";

export async function main(props: { address: string; approve: string }) {
  const [deployer] = await ethers.getSigners();
  const { address, approve } = props;
  const ListBusinessApply = await ethers.getContractFactory(
    "ListBusinessApply"
  );
  const listBusinessApply = ListBusinessApply.attach(address);
  const tx = await listBusinessApply.approve(approve, {
    from: deployer.address,
  });
  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main({ address: "", approve: "" }).catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
