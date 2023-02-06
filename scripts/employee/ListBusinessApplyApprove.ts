import { ethers } from "hardhat";

//  pnpm hardhat run scripts/employee/ListBusinessApplyApprove.ts  --network iscv

const address = "0xAfcD162EbA39B117d669bC5dF874bd6Eb55e405A";
const approve = "0x7b43cAb6B30ca97B3C767d3fd550F233A39CA633";

async function main() {
  const [deployer] = await ethers.getSigners();
  //   console.log("Account balance:", (await deployer.getBalance()).toString());
  const ListBusinessApply = await ethers.getContractFactory(
    "ListBusinessApply"
  );
  const listBusinessApply = ListBusinessApply.attach(address);
  listBusinessApply.approve(approve, { from: deployer.address });
  //   console.log("Token address:", (await listEmployee.owner()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
