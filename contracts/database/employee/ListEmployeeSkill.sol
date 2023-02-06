// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {Permission} from "../../abstract/Permission.sol";

import {EmployeeSkill} from "../../struct/employee/EmployeeSkillStruct.sol";

import {StringTool} from "../../library/StringTool.sol";

contract ListEmployeeSkill is Permission {
    using StringTool for string;

    EmployeeSkill[] public list;

    constructor() Permission() {}

    event Add(EmployeeSkill item);

    event Remove(EmployeeSkill item);

    function add(EmployeeSkill memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function at(uint256 index) public view returns (EmployeeSkill memory) {
        return list[index];
    }

    function getAll() public view returns (EmployeeSkill[] memory) {
        return list;
    }

    // setter //////////////////////////////////////////////////////////////////////////
    function setId(uint256 index, uint256 value) public onlyApproved {
        list[index].id = value;
    }

    function setEmployeeId(uint256 index, uint256 value) public onlyApproved {
        list[index].employeeId = value;
    }

    function setTitle(uint256 index, string memory value) public onlyApproved {
        list[index].title = value;
    }

    function setLevel(uint256 index, uint256 value) public onlyApproved {
        list[index].level = value;
    }

    function setEmployeeSkill(
        uint256 index,
        uint256 id,
        string memory title,
        uint256 level
    ) public onlyApproved {
        list[index].id = id;
        list[index].title = title;
        list[index].level = level;
    }

    function findIdByEmployeeIdAndTitle(uint256 employeeId, string memory title)
        public
        view
        returns (uint256)
    {
        for (uint256 i = 0; i < list.length; i++) {
            if (list[i].employeeId == employeeId && list[i].title.equal(title))
                return i;
        }
        return type(uint256).max;
    }
}
