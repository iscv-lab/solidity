import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusiness.ts --network iscv
export async function main() {
  const ListIIGSWResult = await ethers.getContractFactory("ListIIGSWResult");
  const listIIGSWResult = await ListIIGSWResult.deploy();
  return listIIGSWResult.address;
}

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
