// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12;

import {IIGData} from "../../../database/business/igg/IIGData.sol";

abstract contract IIGDataCursor {
    IIGData private iigDataCursor;

    constructor(address value) {
        iigDataCursor = IIGData(value);
    }

    modifier isIIGAccount() {
        require(
            iigDataCursor.getIIGAccount() == msg.sender,
            "IIGController: is not IIG Account"
        );
        _;
    }

    function _getIIGDataCursor() internal view returns (IIGData) {
        return iigDataCursor;
    }
}
