// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {ListEmployeeCV} from "../../../database/employee/cv/ListEmployeeCV.sol";

abstract contract ListEmployeeCVCursor {
    ListEmployeeCV private listEmployeeCVCursor;

    constructor(address value) {
        listEmployeeCVCursor = ListEmployeeCV(value);
    }

    modifier onlyIdBelongstoEmployeeId(uint256 id, uint256 employeeId) {
        require(
            _checkIdBelongstoEmployeeId(id, employeeId),
            "ListEmployeeCVCursor: id is not belongs to address"
        );
        _;
    }

    function _checkIdBelongstoEmployeeId(uint256 id, uint256 employeeId)
        internal
        view
        returns (bool)
    {
        uint256 validateEmployeeId = listEmployeeCVCursor.at(id).employeeId;
        if (validateEmployeeId == employeeId) return true;
        return false;
    }

    function _getListEmployeeCVCursor() internal view returns (ListEmployeeCV) {
        return listEmployeeCVCursor;
    }
}
