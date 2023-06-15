// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {Permission} from "../../../abstract/Permission.sol";
import {IIGLRResult, IIGShiftTest} from "../../../struct/business/iig/IIGResultStruct.sol";

contract ListIIGLRResult is Permission {
    IIGLRResult[] public list;

    constructor() Permission() {}

    event Add(IIGLRResult item);

    event Remove(IIGLRResult item);

    function add(IIGLRResult memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function getAll() public view returns (IIGLRResult[] memory) {
        return list;
    }

    function at(uint256 index) public view returns (IIGLRResult memory) {
        return list[index];
    }

    // setter //////////////////////////////////////////////////////////////////////////


    function setEmployeeId(uint256 index, uint256 value) public onlyApproved {
        list[index].employeeId = value;
    }

    function setTestDate(uint256 index, uint256 value) public onlyApproved {
        list[index].testDate = value;
    }

    function setShiftTest(uint256 index, IIGShiftTest value)
        public
        onlyApproved
    {
        list[index].shiftTest = value;
    }

    function setExprireDate(uint256 index, uint256 value) public onlyApproved {
        list[index].expireDate = value;
    }

    function setListeningScore(uint256 index, uint256 value)
        public
        onlyApproved
    {
        list[index].listeningScore = value;
    }

    function setReadingScore(uint256 index, uint256 value) public onlyApproved {
        list[index].readingScore = value;
    }

    function setRequest(
        uint256 index,
        uint256 employeeId,
        uint256 testDate,
        IIGShiftTest shiftTest,
        uint256 expireDate,
        uint256 listeningScore,
        uint256 readingScore
    ) public onlyApproved {
        list[index].employeeId = employeeId;
        list[index].testDate = testDate;
        list[index].shiftTest = shiftTest;
        list[index].expireDate = expireDate;
        list[index].listeningScore = listeningScore;
        list[index].readingScore = readingScore;
    }
}
