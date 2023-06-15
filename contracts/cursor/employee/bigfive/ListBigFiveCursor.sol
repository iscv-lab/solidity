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

    event AddBigFive(uint256 employeeId, string cid);
    modifier onlyDiffSevenDays(uint256 employeeId) {
        require(
            isDiffSevenDays(employeeId),
            "ListBigFiveCursor:  not different 7 days"
        );
        _;
    }

    function isDiffSevenDays(uint256 employeeId) public view returns (bool) {
        uint256 current = block.timestamp;
        BigFive[] memory list = listBigFiveCursor.getAll();
        for (uint256 i = 0; i < list.length; i++) {
            BigFive memory item = list[i];
            if (
                employeeId == item.employeeId &&
                current - item.time < SEVEN_DAYS
            ) return false;
        }
        return true;
    }

    function _getListBigFiveCursor() internal view returns (ListBigFive) {
        return listBigFiveCursor;
    }
}
