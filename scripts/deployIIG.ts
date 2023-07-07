import * as fs from "fs";
import { ethers } from "hardhat";
import * as path from "path";
import * as BusinessController from "./business/BusinessController";
import * as ListBusinessApprove from "./business/ListBusinessApprove";
import * as IIGController from "./business/iig/IIGController";
import * as IIGData from "./business/iig/IIGData";
import * as IIGDataApprove from "./business/iig/IIGDataApprove";
import * as ListIIGLRResult from "./business/iig/ListIIGLRResult";
import * as ListIIGLRResultApprove from "./business/iig/ListIIGLRResultApprove";
import * as ListIIGSWResultApprove from "./business/iig/ListIIGLRResultApprove";
import * as ListIIGSWResult from "./business/iig/ListIIGSWResult";
import * as ListEmployeeApprove from "./employee/ListEmployeeApprove";

const logFile = fs.createWriteStream(path.join("./debug.log"), {
  flags: "a",
});
const logger = (value: string) => logFile.write(`${value}\n`);

async function main() {
  try {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const listBusinessAddress = "0xee7956C0919Aff3c51aD45901311338ce972aB9C";
    const listEmployeeAddress = "0x3F1B69D895EdB81cC03B79f3D5C04bCD1414C89f";
    // iig

    const iigDataAddress = await IIGData.main();
    logger(`iigDataAddress: ${iigDataAddress}`);
    const listIIGLRResultAddress = await ListIIGLRResult.main();
    logger(`listIIGLRResultAddress: ${listIIGLRResultAddress}`);
    const listIIGSWResultAddress = await ListIIGSWResult.main();
    logger(`listIIGSWResultAddress: ${listIIGSWResultAddress}`);
    const iigControllerAddress = await IIGController.main({
      listBusinessAddress,
      listEmployeeAddress,
      listIIGLRResultAddress,
      listIIGSWResultAddress,
      iigDataAddress,
      iigAccountAddress: deployer.address,
    });
    logger(`iigControllerAddress: ${iigControllerAddress}`);

    await ListBusinessApprove.main({
      address: listBusinessAddress,
      approve: iigControllerAddress,
    });
    await ListEmployeeApprove.main({
      address: listEmployeeAddress,
      approve: iigControllerAddress,
    });
    await IIGDataApprove.main({
      address: iigDataAddress,
      approve: iigControllerAddress,
    });
    await IIGDataApprove.main({
      address: deployer.address,
      approve: iigControllerAddress,
    });
    await ListIIGLRResultApprove.main({
      address: listIIGLRResultAddress,
      approve: iigControllerAddress,
    });
    await ListIIGSWResultApprove.main({
      address: listIIGSWResultAddress,
      approve: iigControllerAddress,
    });

    await IIGData.setAccount({
      iigDataAddress,
      iigAccountAddress: deployer.address,
    });

    // create iig

    await BusinessController.addIIGProfile({
      address: listBusinessAddress,
      iigAccountAddress: deployer.address,
    });
  } catch (error) {
    console.error(error);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
