// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {ListBusinessPost} from "../../../database/business/post/ListBusinessPost.sol";

abstract contract ListBusinessPostCursor {
    ListBusinessPost private listBusinessPostCursor;

    constructor(address value) {
        listBusinessPostCursor = ListBusinessPost(value);
    }

    modifier onlyPostIdBelongstoBusinessId(uint256 id, uint256 businessId) {
        require(
            _checkPostIdBelongstoBusinessId(id, businessId),
            "List Business Post Cursor: post id not belongs to business id"
        );
        _;
    }

    function _checkPostIdBelongstoBusinessId(
        uint256 id,
        uint256 businessId
    ) public view returns (bool) {
        uint256 validateId = listBusinessPostCursor.at(id).businessId;
        if (validateId == businessId) return true;
        return false;
    }

    function _getListBusinessPostCursor()
        internal
        view
        returns (ListBusinessPost)
    {
        return listBusinessPostCursor;
    }
}
