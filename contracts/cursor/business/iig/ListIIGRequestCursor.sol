// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {ListIIGRequest} from "../../../database/business/igg/ListIIGRequest.sol";
import {IIGRequest, IIGStatusRequest, IIGRequestType} from "../../../struct/business/iig/IIGRequestStruct.sol";

abstract contract ListIIGRequestCursor {
    ListIIGRequest private listIIGRequestCursor;

    constructor(address value) {
        listIIGRequestCursor = ListIIGRequest(value);
    }

    modifier existRequest(uint256 businessId, uint256 employeeId) {
        require(
            _checkExistRequest(businessId, employeeId),
            "IIGListIIGRequestCursor: already existed Request"
        );
        _;
    }

    modifier onlyIIGRequestIdBelongstoEmployeeId(
        uint256 id,
        uint256 employeeId
    ) {
        require(
            _checkIIGRequestIdBelongstoEmployeeId(id, employeeId),
            "IIGListIIGRequestCursor: only id belongsto employee id"
        );
        _;
    }
    modifier onlyIIGRequestIdBelongstoBusinessId(
        uint256 id,
        uint256 businessId
    ) {
        require(
            _checkIIGRequestIdBelongstoBusinessId(id, businessId),
            "IIGListIIGRequestCursor: only id belongsto employee id"
        );
        _;
    }

    modifier onlyIIGRequestLROnetime(uint256 employeeId, uint256 businessId) {
        require(
            !_checkExistIIGRequestLR(employeeId, businessId),
            "IIGListIIGRequestCursor: Only request LR onetime"
        );
        _;
    }
    modifier onlyIIGRequestSWOnetime(uint256 employeeId, uint256 businessId) {
        require(
            !_checkExistIIGRequestSW(employeeId, businessId),
            "IIGListIIGRequestCursor: Only request LR onetime"
        );
        _;
    }

    function _checkExistIIGRequestLR(uint256 employeeId, uint256 businessId)
        public
        view
        returns (bool)
    {
        IIGRequest[] memory list = _getListIIGRequestCursor().getAll();
        for (uint256 i = 0; i < list.length; i++) {
            IIGRequest memory item = list[i];
            if (
                item.employeeId == employeeId &&
                item.businessId == businessId &&
                item.requestType == IIGRequestType.LR &&
                item.statusRequest == IIGStatusRequest.WAITING
            ) return true;
        }
        return false;
    }

    function _checkExistIIGRequestSW(uint256 employeeId, uint256 businessId)
        public
        view
        returns (bool)
    {
        IIGRequest[] memory list = _getListIIGRequestCursor().getAll();
        for (uint256 i = 0; i < list.length; i++) {
            IIGRequest memory item = list[i];
            if (
                item.employeeId == employeeId &&
                item.businessId == businessId &&
                item.requestType == IIGRequestType.SW &&
                item.statusRequest == IIGStatusRequest.WAITING
            ) return true;
        }
        return false;
    }

    function _checkIIGRequestIdBelongstoEmployeeId(
        uint256 id,
        uint256 employeeId
    ) internal view returns (bool) {
        uint256 validateEmployeeId = listIIGRequestCursor.at(id).employeeId;
        if (validateEmployeeId == employeeId) return true;
        return false;
    }

    function _checkIIGRequestIdBelongstoBusinessId(
        uint256 id,
        uint256 businessId
    ) internal view returns (bool) {
        uint256 validateBusinessId = listIIGRequestCursor.at(id).businessId;
        if (validateBusinessId == businessId) return true;
        return false;
    }

    function _checkExistRequest(uint256 businessId, uint256 employeeId)
        internal
        view
        returns (bool)
    {
        return
            listIIGRequestCursor.isEmployeeHadBeenWaiting(
                businessId,
                employeeId
            );
    }

    function _getListIIGRequestCursor() internal view returns (ListIIGRequest) {
        return listIIGRequestCursor;
    }
}
