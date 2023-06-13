// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {Permission} from "../../../abstract/Permission.sol";

contract IIGData is Permission {
    address public iigAccount;

    constructor() Permission() {}

    // event Add(IIGLRResult item);

    // event Remove(IIGLRResult item);

    function setIIGAccount(address iigAccountAddress) public onlyApproved {
        iigAccount = iigAccountAddress;
    }

    // getter
    function getIIGAccount() public view returns (address) {
        return iigAccount;
    }
}
