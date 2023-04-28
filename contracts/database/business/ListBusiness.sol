// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {Permission} from "../../abstract/Permission.sol";

import {Profile} from "../../struct/business/BusinessStruct.sol";

contract ListBusiness is Permission {
    Profile[] public list;

    constructor() Permission() {}

    event Add(Profile item);

    event Remove(Profile item);

    function add(Profile memory item) public onlyApproved {
        item.id = list.length;
        list.push(item);
        emit Add(item);
    }

    function edit(Profile memory item) public onlyApproved {
        list[item.id] = item;
    }

    function at(uint256 index) public view returns (Profile memory) {
        return list[index];
    }

    function findIdByAddress(address value) public view returns (uint256) {
        for (uint256 i = 0; i < list.length; i++) {
            if (list[i].user == value) return list[i].id;
        }
        return type(uint256).max;
    }

    function getAll() public view returns (Profile[] memory) {
        return list;
    }

    function atAddress(address value) public view returns (Profile memory) {
        for (uint256 i = 0; i < list.length; i++) {
            if (list[i].user == value) return list[i];
        }
        return
            Profile(
                type(uint256).max,
                type(uint256).max,
                address(0),
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            );
    }

    // setter //////////////////////////////////////////////////////////////////////////
    function setCategory(uint256 index, uint256 value) public onlyApproved {
        list[index].category = value;
    }

    function setId(uint256 index, uint256 value) public onlyApproved {
        list[index].id = value;
    }

    function setUser(uint256 index, address value) public onlyApproved {
        list[index].user = value;
    }

    function setName(uint256 index, string memory value) public onlyApproved {
        list[index].name = value;
    }

    function setPhone(uint256 index, string memory value) public onlyApproved {
        list[index].phone = value;
    }

    function setProfessional(
        uint256 index,
        string memory value
    ) public onlyApproved {
        list[index].professional = value;
    }

    function setEmail(uint256 index, string memory value) public onlyApproved {
        list[index].email = value;
    }

    function setGithub(uint256 index, string memory value) public onlyApproved {
        list[index].github = value;
    }

    function setLinkedin(
        uint256 index,
        string memory value
    ) public onlyApproved {
        list[index].linkedin = value;
    }

    function setSourceImage(
        uint256 index,
        string memory value
    ) public onlyApproved {
        list[index].sourceImage = value;
    }
}
