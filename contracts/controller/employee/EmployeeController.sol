// SPDX-License-Identifier: MIT
pragma solidity >=0.8.14 <0.9.0;

import {Ownable} from "../../abstract/Ownable.sol";
import {ListEmployeeCursor} from "../../cursor/employee/ListEmployeeCursor.sol";

import {Profile} from "../../struct/employee/EmployeeStruct.sol";

import {StringTool} from "../../library/StringTool.sol";
import {BusinessPost, BusinessPostStatus} from "../../struct/business/post/BusinessPostStruct.sol";

import {BusinessApply} from "../../struct/business/apply/BusinessApplyStruct.sol";
import {ListEmployeeSkillCursor} from "../../cursor/employee/ListEmployeeSkillCursor.sol";
import {EmployeeSkill} from "../../struct/employee/EmployeeSkillStruct.sol";
import {ListBusinessPostCursor} from "../../cursor/business/post/ListBusinessPostCursor.sol";
import {ListBusinessApplyCursor} from "../../cursor/business/apply/ListBusinessApplyCursor.sol";
import {ListBusinessAppointmenCursor} from "../../cursor/business/apply/ListBusinessAppointmenCursor.sol";
import {BusinessAppointment} from "../../struct/business/apply/BusinessAppointmentStruct.sol";

contract EmployeeController is
    Ownable,
    ListEmployeeCursor,
    ListEmployeeSkillCursor,
    ListBusinessApplyCursor,
    ListBusinessAppointmenCursor
{
    constructor(
        address listEmployeeAddress,
        address listEmployeeSkillAddress,
        address listEmployeeApplyAddress,
        address listEmployeeAppointmenAddress
    )
        Ownable()
        ListEmployeeCursor(listEmployeeAddress)
        ListEmployeeSkillCursor(listEmployeeSkillAddress)
        ListBusinessApplyCursor(listEmployeeApplyAddress)
        ListBusinessAppointmenCursor(listEmployeeAppointmenAddress)
    {}

    using StringTool for string;

    // Chức năng thêm thông tin doanh nghiệp
    function addEmployee(
        uint256 category,
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
            category,
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

    // Chức năng chỉnh sửa thông tin doanh nghiệp
    // function editEmployee(
    //     uint256 id,
    //     uint256 idCardNumber,
    //     string memory name,
    //     string memory phone,
    //     string memory professional,
    //     string memory email,
    //     string memory github,
    //     string memory linkedin,
    //     string memory sourceImage
    // ) public onlyEmployeeIdBelongstoAddress(id) returns (bool) {
    //     _getListEmployeeCursor().setIdCardNumber(
    //         id,
    //         DATABASE_KEY,
    //         idCardNumber
    //     );
    //     _getListEmployeeCursor().setName(id, DATABASE_KEY, name);
    //     _getListEmployeeCursor().setPhone(id, DATABASE_KEY, phone);
    //     _getListEmployeeCursor().setProfessional(
    //         id,
    //         DATABASE_KEY,
    //         professional
    //     );
    //     _getListEmployeeCursor().setEmail(id, DATABASE_KEY, email);
    //     _getListEmployeeCursor().setGithub(id, DATABASE_KEY, github);
    //     _getListEmployeeCursor().setLinkedin(id, DATABASE_KEY, linkedin);
    //     _getListEmployeeCursor().setSourceImage(id, DATABASE_KEY, sourceImage);
    //     return true;
    // }

    function getAllProfile() public view returns (Profile[] memory) {
        return _getListEmployeeCursor().getAll();
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
        uint256 postId
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
}
