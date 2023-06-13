import { ethers } from "hardhat";

// pnpm hardhat run scripts/business/ListBusiness.ts --network iscv
export async function main(props: {
  listBusinessAddress: string;
  listBusinessApplyAddress: string;
}) {
  const { listBusinessAddress, listBusinessApplyAddress } = props;
  const BusinessController = await ethers.getContractFactory(
    "BusinessController"
  );
  const businessController = await BusinessController.deploy(
    listBusinessAddress,
    listBusinessApplyAddress
  );
  return businessController.address;
}

export const addIIGProfile = async (props: {
  iigAccountAddress: string;
  address: string;
}) => {
  const { iigAccountAddress, address } = props;
  const [deployer] = await ethers.getSigners();

  const ListBusiness = await ethers.getContractFactory('ListBusiness');
  const listBusiness = ListBusiness.attach(address);
  await listBusiness.add(
    {
      id: 0,
      user: iigAccountAddress,
      name: "IIG Viet Name",
      phone: "1900 636929",
      professional: "education",
      email: "info@iigvietnam.edu.vn",
      github: "",
      linkedin: "https://www.linkedin.com/company/iig-vietnam/",
      sourceImage: "",
      category: 1,
    },
    { from: deployer.address }
  );
};
// main({
//   listBusinessAddress: "string",
//   listBusinessPostAddress: "string",
//   listBusinessApplyAddress: "string",
//   listBusinessAppointmenAddress: "string",
// }).catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
