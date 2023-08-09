import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusiness.ts --network iscv
export async function main() {
  const IIGData = await ethers.getContractFactory("IIGData");
  const iigData = await IIGData.deploy();
  return iigData.address;
}

export async function setAccount({
  iigDataAddress,
  iigAccountAddress,
}: {
  iigDataAddress: string;
  iigAccountAddress: string;
}) {
  const [deployer] = await ethers.getSigners();
  const IIGData = await ethers.getContractFactory("IIGData");
  const iigData = IIGData.attach(iigDataAddress);
  const tx = await iigData.setIIGAccount(iigAccountAddress, {
    from: deployer.address,
  });
  await tx.wait();
}

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
