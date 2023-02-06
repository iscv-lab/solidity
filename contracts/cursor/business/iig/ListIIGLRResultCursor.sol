// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {ListIIGLRResult} from "../../../database/business/igg/ListIIGLRResult.sol";

abstract contract ListIIGLRResultCursor {
    ListIIGLRResult private listIIGLRResultCursor;

    constructor(address value) {
        listIIGLRResultCursor = ListIIGLRResult(value);
    }

    modifier onlyIIGLRResultIdBelongstoEmployeeId(
        uint256 id,
        uint256 employeeId
    ) {
        require(
            _checkIIGLRResultIdBelongstoEmployeeId(id, employeeId),
            "IIGListIIGLRResultCursor: id is not belongs to address"
        );
        _;
    }

    function _checkIIGLRResultIdBelongstoEmployeeId(
        uint256 id,
        uint256 employeeId
    ) internal view returns (bool) {
        uint256 validateEmployeeId = listIIGLRResultCursor.at(id).employeeId;
        if (validateEmployeeId == employeeId) return true;
        return false;
    }

    modifier onlyIIGLRResultIdBelongstoBusinessId(
        uint256 id,
        uint256 businessId
    ) {
        require(
            _checkIIGLRResultIdBelongstoBusinessId(id, businessId),
            "IIGListIIGLRResultCursor: id is not belongs to address"
        );
        _;
    }

    function _checkIIGLRResultIdBelongstoBusinessId(
        uint256 id,
        uint256 businessId
    ) internal view returns (bool) {
        uint256 validateBusinessId = listIIGLRResultCursor.at(id).businessId;
        if (validateBusinessId == businessId) return true;
        return false;
    }

    function _getListIIGLRResultCursor()
        internal
        view
        returns (ListIIGLRResult)
    {
        return listIIGLRResultCursor;
    }
}
