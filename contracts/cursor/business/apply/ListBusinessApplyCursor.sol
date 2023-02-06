// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import {ListBusinessApply} from "../../../database/business/apply/ListBusinessApply.sol";
import {BusinessApply} from "../../../struct/business/apply/BusinessApplyStruct.sol";

abstract contract ListBusinessApplyCursor {
    ListBusinessApply private listBusinessApplyCursor;

    constructor(address value) {
        listBusinessApplyCursor = ListBusinessApply(value);
    }

    modifier hadApplied(uint256 id, uint256 employeeId) {
        require(
            !_checkExistApply(id, employeeId),
            "ListBusinessApplyCursor: had applied"
        );
        _;
    }

    modifier onlyApplyIdBelongsToEmployeeId(uint256 id, uint256 employeeId) {
        require(
            _checkApplyIdBelongsToEmployeeId(id, employeeId),
            "ListBusinessApplyCursor: apply id not belongs to employee id"
        );
        _;
    }
    modifier onlyApplyIdBelongsToPostId(uint256 id, uint256 postId) {
        require(
            _checkIdBelongsToPostId(id, postId),
            "ListBusinessApplyCursor: apply id not belongs to post id"
        );
        _;
    }

    function _checkExistApply(
        uint256 employeeId,
        uint256 postId
    ) public view returns (bool) {
        BusinessApply[] memory list = listBusinessApplyCursor.getAll();
        for (uint256 i = 0; i < list.length; i++) {
            BusinessApply memory item = list[i];
            if (item.employeeId == employeeId && item.postId == postId)
                return true;
        }
        return false;
    }

    function _checkIdBelongsToPostId(
        uint256 id,
        uint256 postId
    ) public view returns (bool) {
        uint256 checkPostId = listBusinessApplyCursor.at(id).postId;
        if (postId == checkPostId) return true;
        return false;
    }

    function _checkApplyIdBelongsToEmployeeId(
        uint256 id,
        uint256 employeeId
    ) public view returns (bool) {
        uint256 checkId = listBusinessApplyCursor.at(id).employeeId;
        if (employeeId == checkId) return true;
        return false;
    }

    function _getListBusinessApplyCursor()
        internal
        view
        returns (ListBusinessApply)
    {
        return listBusinessApplyCursor;
    }
}
