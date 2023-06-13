import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusiness.ts --network iscv
export async function main() {
  const ListIIGLRResult = await ethers.getContractFactory("ListIIGLRResult");
  const listIIGLRResult = await ListIIGLRResult.deploy();
  return listIIGLRResult.address;
}

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
