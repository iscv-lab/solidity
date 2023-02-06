// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {ListIIGSWResult} from "../../../database/business/igg/ListIIGSWResult.sol";

abstract contract ListIIGSWResultCursor {
    ListIIGSWResult private listIIGSWResultCursor;

    constructor(address value) {
        listIIGSWResultCursor = ListIIGSWResult(value);
    }

    modifier onlyIIGSWResultIdBelongstoEmployeeId(
        uint256 id,
        uint256 employeeId
    ) {
        require(
            _checkIIGSWResultIdBelongstoEmployeeId(id, employeeId),
            "IIGListIIGSWResultCursor: id is not belongs to address"
        );
        _;
    }

    function _checkIIGSWResultIdBelongstoEmployeeId(
        uint256 id,
        uint256 employeeId
    ) internal view returns (bool) {
        uint256 validateEmployeeId = listIIGSWResultCursor.at(id).employeeId;
        if (validateEmployeeId == employeeId) return true;
        return false;
    }

    modifier onlyIIGSWResultIdBelongstoBusinessId(
        uint256 id,
        uint256 businessId
    ) {
        require(
            _checkIIGSWResultIdBelongstoBusinessId(id, businessId),
            "IIGListIIGSWResultCursor: id is not belongs to address"
        );
        _;
    }

    function _checkIIGSWResultIdBelongstoBusinessId(
        uint256 id,
        uint256 businessId
    ) internal view returns (bool) {
        uint256 validateBusinessId = listIIGSWResultCursor.at(id).businessId;
        if (validateBusinessId == businessId) return true;
        return false;
    }

    function _getListIIGSWResultCursor()
        internal
        view
        returns (ListIIGSWResult)
    {
        return listIIGSWResultCursor;
    }
}
