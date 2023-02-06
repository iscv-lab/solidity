// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {Permission} from "../../../abstract/Permission.sol";
import {IIGRequest, IIGStatusRequest, IIGRequestType} from "../../../struct/business/iig/IIGRequestStruct.sol";

contract ListIIGRequest is Permission {
    IIGRequest[] public list;

    constructor() Permission() {}

    event Add(IIGRequest item);
    event Remove(IIGRequest item);

    function add(IIGRequest memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function at(uint256 index) public view returns (IIGRequest memory) {
        return list[index];
    }

    function getAll() public view returns (IIGRequest[] memory) {
        return list;
    }

    function isEmployeeHadBeenWaiting(uint256 businessId, uint256 employeeId)
        public
        view
        returns (bool)
    {
        for (uint256 i = 0; i < list.length; i++) {
            if (
                list[i].businessId == businessId &&
                list[i].employeeId == employeeId
            )
                if (list[i].statusRequest == IIGStatusRequest.WAITING)
                    return true;
        }
        return false;
    }

    // setter //////////////////////////////////////////////////////////////////////////
    function setBusinessId(uint256 index, uint256 value) public onlyApproved {
        list[index].businessId = value;
    }

    function setEmployeeId(uint256 index, uint256 value) public onlyApproved {
        list[index].employeeId = value;
    }

    function setRequestId(uint256 index, uint256 value) public onlyApproved {
        list[index].id = value;
    }

    function setRequestDate(uint256 index, uint256 value) public onlyApproved {
        list[index].requestDate = value;
    }

    function setRequestType(uint256 index, IIGRequestType value)
        public
        onlyApproved
    {
        list[index].requestType = value;
    }

    function setStatusRequest(uint256 index, IIGStatusRequest value)
        public
        onlyApproved
    {
        list[index].statusRequest = value;
    }

    function setRequest(
        uint256 index,
        uint256 businessId,
        uint256 employeeId,
        uint256 requestDate,
        IIGRequestType requestType,
        IIGStatusRequest statusRequest
    ) public onlyApproved {
        list[index].businessId = businessId;
        list[index].employeeId = employeeId;
        list[index].requestDate = requestDate;
        list[index].requestType = requestType;
        list[index].statusRequest = statusRequest;
    }
}
