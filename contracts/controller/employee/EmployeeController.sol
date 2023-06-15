// SPDX-License-Identifier: MIT
pragma solidity >=0.8.14 <0.9.0;

import {Ownable} from "../../abstract/Ownable.sol";
import {ListEmployeeCursor} from "../../cursor/employee/ListEmployeeCursor.sol";

import {Profile} from "../../struct/employee/EmployeeStruct.sol";

import {StringTool} from "../../library/StringTool.sol";
import {BigFive} from "../../struct/employee/bigfive/BigFiveStruct.sol";
import {BusinessApply} from "../../struct/business/apply/BusinessApplyStruct.sol";
import {ListEmployeeSkillCursor} from "../../cursor/employee/ListEmployeeSkillCursor.sol";
import {EmployeeSkill} from "../../struct/employee/EmployeeSkillStruct.sol";
import {ListBusinessApplyCursor} from "../../cursor/business/apply/ListBusinessApplyCursor.sol";
import {ListBigFiveCursor} from "../../cursor/employee/bigfive/ListBigFiveCursor.sol";

contract EmployeeController is
    Ownable,
    ListEmployeeCursor,
    ListEmployeeSkillCursor,
    ListBusinessApplyCursor,
    ListBigFiveCursor
{
    constructor(
        address listEmployeeAddress,
        address listEmployeeSkillAddress,
        address listEmployeeApplyAddress,
        address listBigFiveAddress
    )
        Ownable()
        ListEmployeeCursor(listEmployeeAddress)
        ListEmployeeSkillCursor(listEmployeeSkillAddress)
        ListBusinessApplyCursor(listEmployeeApplyAddress)
        ListBigFiveCursor(listBigFiveAddress)
    {}

    using StringTool for string;

    // Chức năng thêm thông tin doanh nghiệp
    function addEmployee(
        string memory name,
        string memory phone,
        string memory professional,
        string memory email,
        string memory github,
        string memory linkedin,
        string memory sourceImage
    ) public notExistEmployeeAccount {
        address user = msg.sender;
        Profile memory item = Profile(
            0,
            user,
            name,
            phone,
            professional,
            email,
            github,
            linkedin,
            sourceImage
        );
        _getListEmployeeCursor().add(item);
    }

    function getAllProfile() public view returns (Profile[] memory) {
        return _getListEmployeeCursor().getAll();
    }

    function getProfile(uint256 id) public view returns (Profile memory) {
        return _getListEmployeeCursor().at(id);
    }

    // Các chức năng kĩ năng

    function addSkill(
        uint256 id,
        string memory title,
        uint256 level
    ) public onlyIdBelongstoAddress(id) notExistSkill(id, title) {
        EmployeeSkill memory item = EmployeeSkill(id, 0, title, level);
        _getListEmployeeSkillCursor().add(item);
    }

    function editSkill(
        uint256 id,
        uint256 skillId,
        uint256 level
    ) public onlyIdBelongstoAddress(id) onlySkillIdBelongstoId(skillId, id) {
        _getListEmployeeSkillCursor().setLevel(skillId, level);
    }

    function getAllSkill() public view returns (EmployeeSkill[] memory) {
        return _getListEmployeeSkillCursor().getAll();
    }

    function applyPost(
        uint256 employeeId,
        uint256 businessId,
        string memory postId
    ) public onlyIdBelongstoAddress(employeeId) hadApplied(employeeId, postId) {
        BusinessApply memory item = BusinessApply(
            0,
            employeeId,
            businessId,
            postId,
            block.timestamp,
            0
        );
        _getListBusinessApplyCursor().add(item);
    }

    function getListAppliesPost() public view returns (BusinessApply[] memory) {
        return _getListBusinessApplyCursor().getAll();
    }

    function startStartSession(
        uint256 employeeId
    ) public onlyIdBelongstoAddress(employeeId) onlyDiffSevenDays(employeeId) {
        BigFive memory item = BigFive(0, employeeId, block.timestamp, "");
        _getListBigFiveCursor().add(item);
    }

    function addBigFive(
        uint256 employeeId,
        string memory cid
    ) public onlyIdBelongstoAddress(employeeId) onlyDiffSevenDays(employeeId) {
        BigFive memory item = BigFive(0, employeeId, block.timestamp, cid);
        _getListBigFiveCursor().add(item);
        emit AddBigFive(employeeId, cid);
    }

    function getBigFives() public view returns (BigFive[] memory) {
        return _getListBigFiveCursor().getAll();
    }
}
