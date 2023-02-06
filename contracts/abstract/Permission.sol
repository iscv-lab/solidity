// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {Context} from "@openzeppelin/contracts/utils/Context.sol";
import {Ownable} from "./Ownable.sol";

abstract contract Permission is Ownable {
    mapping(address => bool) private approved;

    constructor() Ownable() {
        approve(_msgSender());
    }

    function approve(address value) public onlyOwner {
        approved[value] = true;
    }

    function retrive(address value) public onlyOwner {
        approved[value] = false;
    }

    modifier onlyApproved() {
        _checkApproved();
        _;
    }

    function _checkApproved() internal view {
        require(
            approved[_msgSender()] || _msgSender() == owner(),
            "Permission: only approved"
        );
    }
}
