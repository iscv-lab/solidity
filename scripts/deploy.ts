import { ethers } from "hardhat";
import * as ListBusinessApply from "./business/ListBusinessApply";
import * as ListEmployee from "./employee/ListEmployee";
import * as ListBusiness from "./business/ListBusiness";
import * as ListEmployeeSkill from "./employee/ListEmployeeSkill";
import * as ListBusinessAppointment from "./business/ListBusinessAppointment";
import * as EmployeeController from "./employee/EmployeeController";
import * as BusinessController from "./business/BusinessController";
import * as fs from "fs";
import * as path from "path";
import * as ListEmployeeSkillApprove from "./employee/ListEmployeeSkillApprove";
import * as ListEmployeeApprove from "./employee/ListEmployeeApprove";
import * as ListBusinessApprove from "./business/ListBusinessApprove";
import * as ListBusinessAppointmentApprove from "./business/ListBusinessAppointmentApprove";
import * as ListBusinessApplyApprove from "./business/ListBusinessApplyApprove";
import * as ListBusinessPost from "./business/ListBusinessPost";
import * as ListBusinessPostApprove from "./business/ListBusinessPostApprove";
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

    // business
    const listBusinessAddress = await ListBusiness.main();
    logger(`listBusinessAddress: ${listBusinessAddress}`);
    const listBusinessApplyAddress = await ListBusinessApply.main();
    logger(`listBusinessApplyAddress: ${listBusinessApplyAddress}`);
    const listBusinessPostAddress = await ListBusinessPost.main();
    logger(`listBusinessPostAddress: ${listBusinessPostAddress}`);
    const listBusinessAppointmenAddress = await ListBusinessAppointment.main();
    logger(`listBusinessAppointmenAddress: ${listBusinessAppointmenAddress}`);

    // controller
    const employeeControllerAddress = await EmployeeController.main({
      listBusinessApplyAddress,
      listEmployeeAddress,
      listEmployeeSkillAddress,
      listBusinessAppointmenAddress,
    });
    logger(`employeeControllerAddress: ${employeeControllerAddress}`);
    const businessControllerAddress = await BusinessController.main({
      listBusinessAddress: listBusinessAddress,
      listBusinessApplyAddress: listBusinessApplyAddress,
      listBusinessAppointmenAddress: listBusinessAppointmenAddress,
      listBusinessPostAddress: listBusinessPostAddress,
    });
    logger(`businessControllerAddress: ${businessControllerAddress}`);

    // Approve
    // employee
    await ListEmployeeSkillApprove.main({
      address: listEmployeeSkillAddress,
      approve: employeeControllerAddress,
    });

    await ListEmployeeApprove.main({
      address: listEmployeeAddress,
      approve: employeeControllerAddress,
    });

    // /business
    await ListBusinessAppointmentApprove.main({
      address: listBusinessAppointmenAddress,
      approve: employeeControllerAddress,
    });

    await ListBusinessApprove.main({
      address: listBusinessAddress,
      approve: employeeControllerAddress,
    });

    await ListBusinessApplyApprove.main({
      address: listBusinessApplyAddress,
      approve: employeeControllerAddress,
    });

    await ListBusinessPostApprove.main({
      address: listBusinessPostAddress,
      approve: employeeControllerAddress,
    });

    // employee
    await ListEmployeeSkillApprove.main({
      address: listEmployeeSkillAddress,
      approve: businessControllerAddress,
    });

    await ListEmployeeApprove.main({
      address: listEmployeeAddress,
      approve: businessControllerAddress,
    });

    // /business
    await ListBusinessAppointmentApprove.main({
      address: listBusinessAppointmenAddress,
      approve: businessControllerAddress,
    });

    await ListBusinessApprove.main({
      address: listBusinessAddress,
      approve: businessControllerAddress,
    });

    await ListBusinessApplyApprove.main({
      address: listBusinessApplyAddress,
      approve: businessControllerAddress,
    });

    await ListBusinessPostApprove.main({
      address: listBusinessPostAddress,
      approve: businessControllerAddress,
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
