// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {Permission} from "../../../abstract/Permission.sol";

import {IIGSWResult, IIGShiftTest} from "../../../struct/business/iig/IIGResultStruct.sol";

contract ListIIGSWResult is Permission {
    IIGSWResult[] public list;

    constructor() Permission() {}

    event Add(IIGSWResult item);
    event Remove(IIGSWResult item);

    function add(IIGSWResult memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function getAll() public view returns (IIGSWResult[] memory) {
        return list;
    }

    function at(uint256 index) public view returns (IIGSWResult memory) {
        return list[index];
    }

    // setter //////////////////////////////////////////////////////////////////////////

    function setEmployeeId(uint256 index, uint256 value) public onlyApproved {
        list[index].employeeId = value;
    }

    function setTestDate(uint256 index, uint256 value) public onlyApproved {
        list[index].testDate = value;
    }

    function setShiftTest(
        uint256 index,
        IIGShiftTest value
    ) public onlyApproved {
        list[index].shiftTest = value;
    }

    function setExprireDate(uint256 index, uint256 value) public onlyApproved {
        list[index].expireDate = value;
    }

    function setSpeakingScore(
        uint256 index,
        uint256 value
    ) public onlyApproved {
        list[index].speakingScore = value;
    }

    function setWritingScore(uint256 index, uint256 value) public onlyApproved {
        list[index].writingScore = value;
    }

    function setRequest(
        uint256 index,
        uint256 employeeId,
        uint256 testDate,
        IIGShiftTest shiftTest,
        uint256 expireDate,
        uint256 speakingScore,
        uint256 writingScore
    ) public onlyApproved {
        list[index].employeeId = employeeId;
        list[index].testDate = testDate;
        list[index].shiftTest = shiftTest;
        list[index].expireDate = expireDate;
        list[index].speakingScore = speakingScore;
        list[index].writingScore = writingScore;
    }
}
