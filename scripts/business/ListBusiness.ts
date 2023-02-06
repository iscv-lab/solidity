import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusiness.ts --network iscv
export async function main() {

  const ListBusiness = await ethers.getContractFactory("ListBusiness");
  const listBusiness = await ListBusiness.deploy();
  return listBusiness.address
}

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
