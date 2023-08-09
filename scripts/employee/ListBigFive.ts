import { ethers } from "hardhat";

export async function main() {
  const ListBigFive = await ethers.getContractFactory("ListBigFive");
  const listBigFive = await ListBigFive.deploy();
  return listBigFive.address;
}
