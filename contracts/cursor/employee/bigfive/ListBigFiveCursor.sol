// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {ListBigFive} from "../../../database/employee/bigfive/ListBigFive.sol";
import {BigFive} from "../../../struct/employee/bigfive/BigFiveStruct.sol";

uint256 constant SEVEN_DAYS = 604800;

abstract contract ListBigFiveCursor {
    ListBigFive private listBigFiveCursor;

    constructor(address value) {
        listBigFiveCursor = ListBigFive(value);
    }

    event AddBigFive(uint256 employeeId, uint256 sessionId, string cid);
    modifier onlyDiffSevenDays(uint256 employeeId) {
        require(
            isDiffSevenDays(employeeId),
            "ListBigFiveCursor:  not different 7 days"
        );
        _;
    }

    modifier onlySessionIdBelongstoEmployeeId(
        uint256 sessionId,
        uint256 employeeId
    ) {
        require(
            _checkSessionIdBelongstoEmployeeId(sessionId, employeeId),
            "ListBigFiveCursor: id is not belongs to address"
        );
        _;
    }

    modifier onlyApproveOneTime(uint256 sessionId) {
        require(
            _checkApproveTime(sessionId),
            "ListBigFiveCursor: only approve one time"
        );
        _;
    }

    function _checkApproveTime(uint256 sessionId) internal view returns (bool) {
        BigFive memory bigfive = listBigFiveCursor.at(sessionId);
        if (bytes(bigfive.cid).length != 0) return false;
        return true;
    }

    function _checkSessionIdBelongstoEmployeeId(
        uint256 sessionId,
        uint256 employeeId
    ) internal view returns (bool) {
        uint256 validateEmployeeId = listBigFiveCursor.at(sessionId).employeeId;
        if (validateEmployeeId == employeeId) return true;
        return false;
    }

    function isDiffSevenDays(uint256 employeeId) public view returns (bool) {
        uint256 current = block.timestamp;
        BigFive[] memory list = listBigFiveCursor.getAll();
        for (uint256 i = 0; i < list.length; i++) {
            BigFive memory item = list[i];
            if (
                employeeId == item.employeeId &&
                current - item.startTime < SEVEN_DAYS
            ) return false;
        }
        return true;
    }

    function _getListBigFiveCursor() internal view returns (ListBigFive) {
        return listBigFiveCursor;
    }
}
