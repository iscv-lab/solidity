// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {ListBusinessCursor} from "../../cursor/business/ListBusinessCursor.sol";
import {Ownable} from "../../abstract/Ownable.sol";
import {Profile, EBusinessCategory} from "../../struct/business/BusinessStruct.sol";
import {StringTool} from "../../library/StringTool.sol";
import {BusinessApply} from "../../struct/business/apply/BusinessApplyStruct.sol";
import {ListBusinessApplyCursor} from "../../cursor/business/apply/ListBusinessApplyCursor.sol";

contract BusinessController is
    Ownable,
    ListBusinessCursor,
    ListBusinessApplyCursor
{
    constructor(
        address listBusinessAddress,
        address listBusinessApplyAddress
    )
        Ownable()
        ListBusinessCursor(listBusinessAddress)
        ListBusinessApplyCursor(listBusinessApplyAddress)
    {}

    using StringTool for string;

    // Chức năng thêm thông tin doanh nghiệp
    function addBusiness(
        string memory name,
        string memory phone,
        string memory professional,
        string memory email,
        string memory github,
        string memory linkedin,
        string memory sourceImage
    ) public notExistBusinessAccount {
        address user = msg.sender;
        Profile memory item = Profile(
            0,
            user,
            name,
            phone,
            professional,
            email,
            github,
            linkedin,
            sourceImage,
            EBusinessCategory.NULL
        );
        _getListBusinessCursor().add(item);
    }

    // Chức năng chỉnh sửa thông tin doanh nghiệp
    // function editBusiness(
    //     uint256 id,
    //     string memory name,
    //     string memory phone,
    //     string memory professional,
    //     string memory email,
    //     string memory github,
    //     string memory linkedin,
    //     string memory sourceImage
    // ) public onlyBusinessIdBelongstoAddress(id) {
    //     _getListBusinessCursor().setName(id, DATABASE_KEY, name);
    //     _getListBusinessCursor().setPhone(id, DATABASE_KEY, phone);
    //     _getListBusinessCursor().setProfessional(
    //         id,
    //         DATABASE_KEY,
    //         professional
    //     );
    //     _getListBusinessCursor().setEmail(id, DATABASE_KEY, email);
    //     _getListBusinessCursor().setGithub(id, DATABASE_KEY, github);
    //     _getListBusinessCursor().setLinkedin(id, DATABASE_KEY, linkedin);
    //     _getListBusinessCursor().setSourceImage(id, DATABASE_KEY, sourceImage);
    // }
    function getAllProfile() public view returns (Profile[] memory) {
        return _getListBusinessCursor().getAll();
    }

    function getProfile(uint256 id) public view returns (Profile memory) {
        return _getListBusinessCursor().at(id);
    }

    function getAllApplies() public view returns (BusinessApply[] memory) {
        return _getListBusinessApplyCursor().getAll();
    }

    function getApply(uint256 id) public view returns (BusinessApply memory) {
        return _getListBusinessApplyCursor().at(id);
    }
}
