// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import {Ownable} from "../../../abstract/Ownable.sol";
import {ListBusinessCursor} from "../../../cursor/business/ListBusinessCursor.sol";
import {ListEmployeeCursor} from "../../../cursor/employee/ListEmployeeCursor.sol";

import {IIGLRResult, IIGSWResult, IIGShiftTest} from "../../../struct/business/iig/IIGResultStruct.sol";
import {ListIIGLRResultCursor} from "../../../cursor/business/iig/ListIIGLRResultCursor.sol";
import {ListIIGSWResultCursor} from "../../../cursor/business/iig/ListIIGSWResultCursor.sol";
import {IIGDataCursor} from "../../../cursor/business/iig/IIGDataCursor.sol";

contract IIGController is
    Ownable,
    ListBusinessCursor,
    ListEmployeeCursor,
    IIGDataCursor,
    ListIIGLRResultCursor,
    ListIIGSWResultCursor
{
    constructor(
        address listBusinessAddress,
        address listEmployeeAddress,
        address listIIGLRResultAddress,
        address listIIGSWResultAddress,
        address iigDataAddress,
        address iigAccountAddress
    )
        Ownable()
        ListBusinessCursor(listBusinessAddress)
        ListEmployeeCursor(listEmployeeAddress)
        ListIIGLRResultCursor(listIIGLRResultAddress)
        ListIIGSWResultCursor(listIIGSWResultAddress)
        IIGDataCursor(iigDataAddress)
    {}

    function addLRResult(
        uint256 employeeId,
        uint256 testDate,
        IIGShiftTest shiftTest,
        uint256 expireDate,
        uint256 listeningScore,
        uint256 readingScore
    ) public isIIGAccount {
        IIGLRResult memory item = IIGLRResult(
            0,
            employeeId,
            testDate,
            shiftTest,
            expireDate,
            listeningScore,
            readingScore,
            block.timestamp
        );

        _getListIIGLRResultCursor().add(item);
    }

    function addSWResult(
        uint256 employeeId,
        uint256 testDate,
        IIGShiftTest shiftTest,
        uint256 expireDate,
        uint256 speakingScore,
        uint256 writingScore
    ) public isIIGAccount {
        IIGSWResult memory item = IIGSWResult(
            0,
            employeeId,
            testDate,
            shiftTest,
            expireDate,
            speakingScore,
            writingScore,
            block.timestamp
        );

        _getListIIGSWResultCursor().add(item);
    }

    // setter

    function getAllIIGSWResult() public view returns (IIGSWResult[] memory) {
        return _getListIIGSWResultCursor().getAll();
    }

    function getAllIIGLRResult() public view returns (IIGLRResult[] memory) {
        return _getListIIGLRResultCursor().getAll();
    }
}
