// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {Permission} from "../../../abstract/Permission.sol";
import {BigFive} from "../../../struct/employee/bigfive/BigFiveStruct.sol";
import {StringTool} from "../../../library/StringTool.sol";

contract ListBigFive is Permission {
    using StringTool for string;

    BigFive[] public list;

    constructor() Permission() {}

    event Add(BigFive item);
    event Remove(BigFive item);

    function add(BigFive memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function at(
        uint256 index
    ) public view onlyApproved returns (BigFive memory) {
        return list[index];
    }

    function getAll() public view returns (BigFive[] memory) {
        return list;
    }
}
