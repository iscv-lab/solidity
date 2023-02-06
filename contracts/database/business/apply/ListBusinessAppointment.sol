// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {Permission} from "../../../abstract/Permission.sol";

import {BusinessAppointment} from "../../../struct/business/apply/BusinessAppointmentStruct.sol";

contract ListBusinessAppointment is Permission {
    BusinessAppointment[] public list;

    constructor() Permission() {}

    event Add(BusinessAppointment item);

    event Remove(BusinessAppointment item);

    function add(BusinessAppointment memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function getAll() public view returns (BusinessAppointment[] memory) {
        return list;
    }

    function at(
        uint256 index
    ) public view returns (BusinessAppointment memory) {
        return list[index];
    }
}
