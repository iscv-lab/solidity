// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {ListBusiness} from "../../database/business/ListBusiness.sol";
import {Profile} from "../../struct/business/BusinessStruct.sol";

abstract contract ListBusinessCursor {
    ListBusiness private listBusinessCursor;

    constructor(address value) {
        listBusinessCursor = ListBusiness(value);
    }

    modifier onlyBusinessUser(address user, address value) {
        require(
            _checkBusinessUser(user, value),
            "ListBusinessCursor: caller is not the user"
        );
        _;
    }

    modifier existBusinessAccount() {
        require(
            _checkExistBusinessAccount(),
            "ListBusinessCursor: already not existed account"
        );
        _;
    }
    modifier notExistBusinessAccount() {
        require(
            !_checkExistBusinessAccount(),
            "ListBusinessCursor: already existed account"
        );
        _;
    }

    modifier onlyBusinessIdBelongstoAddress(uint256 id) {
        require(
            _checkExistBusinessAccount(),
            "ListBusinessCursor: already existed account"
        );
        require(
            _checkBusinessIdBelongstoAddress(id),
            "ListBusinessCursor: id is not belong to address"
        );
        _;
    }

    function _checkExistBusinessAccount() public view returns (bool) {
        uint256 id = listBusinessCursor.findIdByAddress(msg.sender);
        if (id > 0) return true;
        return false;
    }

    function _checkBusinessIdBelongstoAddress(
        uint256 id
    ) internal view returns (bool) {
        Profile memory item = listBusinessCursor.at(id);
        return _checkBusinessUser(item.user, msg.sender);
    }

    function _checkBusinessUser(
        address user,
        address value
    ) internal pure returns (bool) {
        if (user == value) return true;
        return false;
    }

    function _getListBusinessCursor() internal view returns (ListBusiness) {
        return listBusinessCursor;
    }
}
