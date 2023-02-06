// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {Permission} from "../../../abstract/Permission.sol";

import {BusinessPost, BusinessPostStatus} from "../../../struct/business/post/BusinessPostStruct.sol";

contract ListBusinessPost is Permission {
    BusinessPost[] public list;

    constructor() Permission() {}

    event Add(BusinessPost item);

    event Remove(BusinessPost item);

    function add(BusinessPost memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function at(
        uint256 index
    ) public view onlyApproved returns (BusinessPost memory) {
        return list[index];
    }

    function getAllPosts() public view returns (BusinessPost[] memory) {
        return list;
    }

    // Setter
    function setBusinessPostStatus(
        uint256 index,
        BusinessPostStatus value
    ) public onlyApproved {
        list[index].status = value;
    }
}
