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

  const ListBusiness = await ethers.getContractFactory("ListBusiness");
  const listBusiness = ListBusiness.attach(address);
  const tx = await listBusiness.add(
    {
      id: 0,
      user: iigAccountAddress,
      name: "IIG Viet Nam",
      phone: "1900 636929",
      professional: "education",
      email: "info@iigvietnam.edu.vn",
      github: "",
      linkedin: "https://www.linkedin.com/company/iig-vietnam/",
      sourceImage: "QmTVT8Efdy8Z6X3CF8CDaSR9XAJkfugVEog5yTFMTm4e9p",
      category: 1,
    },
    { from: deployer.address }
  );
  await tx.wait();
};
