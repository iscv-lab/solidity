// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {Permission} from "../../../abstract/Permission.sol";

import {BusinessApply} from "../../../struct/business/apply/BusinessApplyStruct.sol";

contract ListBusinessApply is Permission {
    BusinessApply[] public list;

    constructor() Permission() {}

    event Add(BusinessApply item);

    event Remove(BusinessApply item);

    function add(BusinessApply memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function getAll()
        public
        view
        onlyApproved
        returns (BusinessApply[] memory)
    {
        return list;
    }

    function at(uint256 index)
        public
        view
        onlyApproved
        returns (BusinessApply memory)
    {
        return list[index];
    }

    // setter
    function setStatus(uint256 index, uint256 status) public onlyApproved {
        list[index].status = status;
    }
}
