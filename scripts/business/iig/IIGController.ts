import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusiness.ts --network iscv
export async function main(props: {
  listBusinessAddress: string;
  listEmployeeAddress: string;
  listIIGLRResultAddress: string;
  listIIGSWResultAddress: string;
  iigDataAddress: string;
  iigAccountAddress: string;
}) {
  const {
    listBusinessAddress,
    listEmployeeAddress,
    listIIGLRResultAddress,
    listIIGSWResultAddress,
    iigDataAddress,
    iigAccountAddress,
  } = props;
  const IIGController = await ethers.getContractFactory("IIGController");
  const iigController = await IIGController.deploy(
    listBusinessAddress,
    listEmployeeAddress,
    listIIGLRResultAddress,
    listIIGSWResultAddress,
    iigDataAddress,
    iigAccountAddress
  );
  return iigController.address;
}

// main({
//   listBusinessAddress: "string",
//   listBusinessPostAddress: "string",
//   listBusinessApplyAddress: "string",
//   listBusinessAppointmenAddress: "string",
// }).catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
