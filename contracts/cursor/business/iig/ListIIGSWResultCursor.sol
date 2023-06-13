// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {ListIIGSWResult} from "../../../database/business/igg/ListIIGSWResult.sol";

abstract contract ListIIGSWResultCursor {
    ListIIGSWResult private listIIGSWResultCursor;

    constructor(address value) {
        listIIGSWResultCursor = ListIIGSWResult(value);
    }

    function _getListIIGSWResultCursor()
        internal
        view
        returns (ListIIGSWResult)
    {
        return listIIGSWResultCursor;
    }
}
