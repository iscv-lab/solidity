// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {Permission} from "../../../abstract/Permission.sol";
import {EmployeeCV} from "../../../struct/employee/cv/EmployeeCVStruct.sol";
import {StringTool} from "../../../library/StringTool.sol";

contract ListEmployeeCV is Permission {
    using StringTool for string;

    EmployeeCV[] public list;

    constructor() Permission() {}

    event Add(EmployeeCV item);
    event Remove(EmployeeCV item);

    function add(EmployeeCV memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function at(
        uint256 index
    ) public view onlyApproved returns (EmployeeCV memory) {
        return list[index];
    }

    function getAll() public view returns (EmployeeCV[] memory) {
        return list;
    }
}
