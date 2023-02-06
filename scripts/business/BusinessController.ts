import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusiness.ts --network iscv
export async function main(props: {
  listBusinessAddress: string;
  listBusinessPostAddress: string;
  listBusinessApplyAddress: string;
  listBusinessAppointmenAddress: string;
}) {
  const {
    listBusinessAddress,
    listBusinessPostAddress,
    listBusinessApplyAddress,
    listBusinessAppointmenAddress,
  } = props;
  const BusinessController = await ethers.getContractFactory(
    "BusinessController"
  );
  const businessController = await BusinessController.deploy(
    listBusinessAddress,
    listBusinessPostAddress,
    listBusinessApplyAddress,
    listBusinessAppointmenAddress
  );
  return businessController.address;
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
