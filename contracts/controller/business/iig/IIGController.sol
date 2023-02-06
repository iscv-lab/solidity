// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import {Ownable} from "../../../abstract/Ownable.sol";
import {ListIIGRequestCursor} from "../../../cursor/business/iig/ListIIGRequestCursor.sol";
import {ListBusinessCursor} from "../../../cursor/business/ListBusinessCursor.sol";
import {ListEmployeeCursor} from "../../../cursor/employee/ListEmployeeCursor.sol";

import {IIGRequest, IIGStatusRequest, IIGRequestType} from "../../../struct/business/iig/IIGRequestStruct.sol";
import {IIGLRResult, IIGSWResult, IIGShiftTest} from "../../../struct/business/iig/IIGResultStruct.sol";
import {ListIIGLRResultCursor} from "../../../cursor/business/iig/ListIIGLRResultCursor.sol";
import {ListIIGSWResultCursor} from "../../../cursor/business/iig/ListIIGSWResultCursor.sol";

uint256 constant IIGCATEGORY = 2;

contract IIGController is
    Ownable,
    ListBusinessCursor,
    ListEmployeeCursor,
    ListIIGRequestCursor,
    ListIIGLRResultCursor,
    ListIIGSWResultCursor
{
    constructor(
        address listBusinessAddress,
        address listEmployeeAddress,
        address listIIGRequestAddress,
        address listIIGLRResultAddress,
        address listIIGSWResultAddress
    )
        Ownable()
        ListBusinessCursor(listBusinessAddress)
        ListEmployeeCursor(listEmployeeAddress)
        ListIIGRequestCursor(listIIGRequestAddress)
        ListIIGLRResultCursor(listIIGLRResultAddress)
        ListIIGSWResultCursor(listIIGSWResultAddress)
    {}

    modifier isIIGAccount(uint256 id) {
        require(
            _getListBusinessCursor().at(id).category == IIGCATEGORY,
            "IIGController: is not IIG Account"
        );
        _;
    }

    //Chức năng request
    function addSWRequest(uint256 employeeId, uint256 businessId)
        public
        onlyIdBelongstoAddress(employeeId)
        isIIGAccount(businessId)
        onlyIIGRequestSWOnetime(employeeId, businessId)
    {
        IIGRequest memory item = IIGRequest(
            0,
            businessId,
            employeeId,
            block.timestamp,
            IIGRequestType.SW,
            IIGStatusRequest.WAITING
        );
        _getListIIGRequestCursor().add(item);
    }

    function addLRRequest(uint256 employeeId, uint256 businessId)
        public
        onlyIdBelongstoAddress(employeeId)
        isIIGAccount(businessId)
        onlyIIGRequestLROnetime(employeeId, businessId)
    {
        IIGRequest memory item = IIGRequest(
            0,
            businessId,
            employeeId,
            block.timestamp,
            IIGRequestType.LR,
            IIGStatusRequest.WAITING
        );
        _getListIIGRequestCursor().add(item);
    }

    function addLRResult(
        uint256 businessId,
        uint256 employeeId,
        uint256 testDate,
        IIGShiftTest shiftTest,
        uint256 expireDate,
        uint256 listeningScore,
        uint256 readingScore,
        uint256 requestId
    )
        public
        onlyBusinessIdBelongstoAddress(businessId)
        isIIGAccount(businessId)
    {
        IIGLRResult memory item = IIGLRResult(
            0,
            businessId,
            employeeId,
            testDate,
            shiftTest,
            expireDate,
            listeningScore,
            readingScore,
            block.timestamp
        );
        _getListIIGRequestCursor().setStatusRequest(
            requestId,
            IIGStatusRequest.ACCEPTED
        );
        _getListIIGLRResultCursor().add(item);
    }

    function addSWResult(
        uint256 businessId,
        uint256 employeeId,
        uint256 testDate,
        IIGShiftTest shiftTest,
        uint256 expireDate,
        uint256 speakingScore,
        uint256 writingScore,
        uint256 requestId
    )
        public
        onlyBusinessIdBelongstoAddress(businessId)
        isIIGAccount(businessId)
    {
        IIGSWResult memory item = IIGSWResult(
            0,
            businessId,
            employeeId,
            testDate,
            shiftTest,
            expireDate,
            speakingScore,
            writingScore,
            block.timestamp
        );
        _getListIIGRequestCursor().setStatusRequest(
            requestId,
            IIGStatusRequest.ACCEPTED
        );
        _getListIIGSWResultCursor().add(item);
    }

    // setter
    function getAllIIGRequest() public view returns (IIGRequest[] memory) {
        return _getListIIGRequestCursor().getAll();
    }

    function getAllIIGSWResult() public view returns (IIGSWResult[] memory) {
        return _getListIIGSWResultCursor().getAll();
    }

    function getAllIIGLRResult() public view returns (IIGLRResult[] memory) {
        return _getListIIGLRResultCursor().getAll();
    }
}
