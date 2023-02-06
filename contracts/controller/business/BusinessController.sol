// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {ListBusinessCursor} from "../../cursor/business/ListBusinessCursor.sol";
import {Ownable} from "../../abstract/Ownable.sol";
import {Profile} from "../../struct/business/BusinessStruct.sol";
import {StringTool} from "../../library/StringTool.sol";
import {BusinessPost, BusinessPostStatus} from "../../struct/business/post/BusinessPostStruct.sol";
import {ListBusinessPostCursor} from "../../cursor/business/post/ListBusinessPostCursor.sol";
import {BusinessApply} from "../../struct/business/apply/BusinessApplyStruct.sol";
import {ListBusinessApplyCursor} from "../../cursor/business/apply/ListBusinessApplyCursor.sol";
import {ListBusinessAppointmenCursor} from "../../cursor/business/apply/ListBusinessAppointmenCursor.sol";
import {BusinessAppointment} from "../../struct/business/apply/BusinessAppointmentStruct.sol";

contract BusinessController is
    Ownable,
    ListBusinessCursor,
    ListBusinessPostCursor,
    ListBusinessApplyCursor,
    ListBusinessAppointmenCursor
{
    constructor(
        address listBusinessAddress,
        address listBusinessPostAddress,
        address listBusinessApplyAddress,
        address listBusinessAppointmenAddress
    )
        Ownable()
        ListBusinessCursor(listBusinessAddress)
        ListBusinessPostCursor(listBusinessPostAddress)
        ListBusinessApplyCursor(listBusinessApplyAddress)
        ListBusinessAppointmenCursor(listBusinessAppointmenAddress)
    {}

    using StringTool for string;

    event eventAddPost(
        uint256 id,
        string hashTag,
        string job,
        string content,
        string imageSource,
        BusinessPostStatus status
    );

    // Chức năng thêm thông tin doanh nghiệp
    function addBusiness(
        uint256 category,
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
            category,
            0,
            user,
            name,
            phone,
            professional,
            email,
            github,
            linkedin,
            sourceImage
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

    function addPost(
        uint256 businessId,
        string memory hashTag,
        string memory job,
        string memory content,
        string memory imageSource,
        BusinessPostStatus status
    ) public onlyBusinessIdBelongstoAddress(businessId) {
        BusinessPost memory item = BusinessPost(
            type(uint256).max,
            businessId,
            hashTag,
            block.timestamp,
            content,
            imageSource,
            job,
            status
        );
        // emit eventAddPost(id, hashTag, job, content, imageSource, status);
        _getListBusinessPostCursor().add(item);
    }

    function getAllPosts() public view returns (BusinessPost[] memory) {
        return _getListBusinessPostCursor().getAllPosts();
    }

    function setStatusPost(
        uint256 postId,
        uint256 businessId,
        BusinessPostStatus status
    )
        public
        onlyIdBelongstoBusinessId(postId, businessId)
        onlyBusinessIdBelongstoAddress(businessId)
    {
        return
            _getListBusinessPostCursor().setBusinessPostStatus(postId, status);
    }

    function getAllApplies() public view returns (BusinessApply[] memory) {
        return _getListBusinessApplyCursor().getAll();
    }

    function addAppointment(
        uint256 businessPostId,
        uint256 employeeId,
        uint256 businessId,
        uint256 businessApplyId,
        uint256 time
    )
        public
        onlyBusinessIdBelongstoAddress(businessId)
        onlyPostIdBelongstoBusinessId(businessPostId, businessId)
        onlyApplyIdBelongsToPostId(businessApplyId, businessPostId)
    {
        BusinessAppointment memory item = BusinessAppointment(
            0,
            businessApplyId,
            employeeId,
            businessId,
            time,
            1
        );
        _getListBusinessAppointmenCursor().add(item);
        _getListBusinessApplyCursor().setStatus(businessApplyId, 1);
    }

    function getAllAppointments()
        public
        view
        returns (BusinessAppointment[] memory)
    {
        return _getListBusinessAppointmenCursor().getAll();
    }
}
