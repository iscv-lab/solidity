import * as fs from "fs";
import { ethers } from "hardhat";
import * as path from "path";
import * as BusinessController from "./business/BusinessController";
import * as ListBusiness from "./business/ListBusiness";
import * as ListBusinessApply from "./business/ListBusinessApply";
import * as ListBusinessApprove from "./business/ListBusinessApprove";
import * as IIGController from "./business/iig/IIGController";
import * as IIGData from "./business/iig/IIGData";
import * as ListIIGLRResult from "./business/iig/ListIIGLRResult";
import * as ListIIGSWResult from "./business/iig/ListIIGSWResult";
import * as EmployeeCVController from "./employee/EmployeeCVController";
import * as EmployeeController from "./employee/EmployeeController";
import * as ListEmployee from "./employee/ListEmployee";
import * as ListEmployeeApprove from "./employee/ListEmployeeApprove";
import * as ListEmployeeCV from "./employee/ListEmployeeCV";
import * as ListEmployeeCVApprove from "./employee/ListEmployeeCVApprove";
import * as ListEmployeeSkill from "./employee/ListEmployeeSkill";
import * as ListEmployeeSkillApprove from "./employee/ListEmployeeSkillApprove";
import * as IIGDataApprove from "./business/iig/IIGDataApprove";
import * as ListIIGLRResultApprove from "./business/iig/ListIIGLRResultApprove";
import * as ListIIGSWResultApprove from "./business/iig/ListIIGLRResultApprove";
import * as ListBusinessApplyApprove from "./business/ListBusinessApplyApprove";
import * as ListBigFive from "./employee/ListBigFive";
import * as ListBigFiveApprove from "./employee/ListBigFiveApprove";

const logFile = fs.createWriteStream(path.join("./debug.log"), {
  flags: "a",
});
const logger = (value: string) => logFile.write(`${value}\n`);

async function main() {
  try {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const listEmployeeAddress = await ListEmployee.main();
    logger(`listEmployeeAddress: ${listEmployeeAddress}`);
    const listEmployeeSkillAddress = await ListEmployeeSkill.main();
    logger(`listEmployeeSkillAddress: ${listEmployeeSkillAddress}`);
    const listEmployeeCVAddress = await ListEmployeeCV.main();
    logger(`listEmployeeCVAddress: ${listEmployeeCVAddress}`);

    // business
    const listBusinessAddress = await ListBusiness.main();
    logger(`listBusinessAddress: ${listBusinessAddress}`);
    const listBusinessApplyAddress = await ListBusinessApply.main();
    logger(`listBusinessApplyAddress: ${listBusinessApplyAddress}`);

    const listBigFiveAddress = await ListBigFive.main();
    logger(`listBigFiveAddress: ${listBigFiveAddress}`);

    // controller
    const employeeControllerAddress = await EmployeeController.main({
      listBusinessApplyAddress,
      listEmployeeAddress,
      listEmployeeSkillAddress,
      listBigFiveAddress,
    });
    logger(`employeeControllerAddress: ${employeeControllerAddress}`);
    const employeeCVController = await EmployeeCVController.main({
      listEmployeeAddress,
      listEmployeeCVAddress,
    });
    logger(`employeeCVController: ${employeeCVController}`);

    const businessControllerAddress = await BusinessController.main({
      listBusinessAddress: listBusinessAddress,
      listBusinessApplyAddress: listBusinessApplyAddress,
    });
    logger(`businessControllerAddress: ${businessControllerAddress}`);
    console.log("first");
    // Approve
    // employee
    await ListEmployeeSkillApprove.main({
      address: listEmployeeSkillAddress,
      approve: employeeControllerAddress,
    });
    console.log("a");
    await ListEmployeeApprove.main({
      address: listEmployeeAddress,
      approve: employeeControllerAddress,
    });
    console.log("b");
    // /business

    await ListBusinessApprove.main({
      address: listBusinessAddress,
      approve: employeeControllerAddress,
    });
    console.log("c");
    await ListBusinessApplyApprove.main({
      address: listBusinessApplyAddress,
      approve: employeeControllerAddress,
    });
    console.log("d");
    // employee
    await ListEmployeeSkillApprove.main({
      address: listEmployeeSkillAddress,
      approve: businessControllerAddress,
    });
    console.log("e");
    await ListEmployeeApprove.main({
      address: listEmployeeAddress,
      approve: businessControllerAddress,
    });
    console.log("f");
    await ListEmployeeCVApprove.main({
      address: listEmployeeCVAddress,
      approve: employeeCVController,
    });
    console.log("g");
    await ListEmployeeApprove.main({
      address: listEmployeeAddress,
      approve: employeeCVController,
    });

    // /business
    console.log("h");
    await ListBusinessApprove.main({
      address: listBusinessAddress,
      approve: businessControllerAddress,
    });
    console.log("i");
    await ListBusinessApplyApprove.main({
      address: listBusinessApplyAddress,
      approve: businessControllerAddress,
    });

    // // iig
    console.log("k");
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
    console.log("l");
    await ListBusinessApprove.main({
      address: listBusinessAddress,
      approve: iigControllerAddress,
    });
    console.log("m");
    await ListEmployeeApprove.main({
      address: listEmployeeAddress,
      approve: iigControllerAddress,
    });
    console.log("n");
    await IIGDataApprove.main({
      address: iigDataAddress,
      approve: iigControllerAddress,
    });
    console.log("o");
    await IIGDataApprove.main({
      address: deployer.address,
      approve: iigControllerAddress,
    });
    console.log("p");
    await ListIIGLRResultApprove.main({
      address: listIIGLRResultAddress,
      approve: iigControllerAddress,
    });
    console.log("q");
    await ListIIGSWResultApprove.main({
      address: listIIGSWResultAddress,
      approve: iigControllerAddress,
    });
    console.log("y");
    await IIGData.setAccount({
      iigDataAddress,
      iigAccountAddress: deployer.address,
    });
    console.log("g");
    // create iig
    await ListBusinessApprove.main({
      address: listBusinessAddress,
      approve: deployer.address,
    });

    console.log("o");
    await BusinessController.addIIGProfile({
      address: listBusinessAddress,
      iigAccountAddress: deployer.address,
    });

    // bigfive
    console.log("p");
    await ListBigFiveApprove.main({
      address: listBigFiveAddress,
      approve: employeeControllerAddress,
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
