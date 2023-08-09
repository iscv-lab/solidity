// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {ListIIGLRResult} from "../../../database/business/igg/ListIIGLRResult.sol";

abstract contract ListIIGLRResultCursor {
    ListIIGLRResult private listIIGLRResultCursor;

    constructor(address value) {
        listIIGLRResultCursor = ListIIGLRResult(value);
    }

    function _getListIIGLRResultCursor()
        internal
        view
        returns (ListIIGLRResult)
    {
        return listIIGLRResultCursor;
    }
}
