// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {ListEmployee} from "../../database/employee/ListEmployee.sol";
import {Profile} from "../../struct/employee/EmployeeStruct.sol";

abstract contract ListEmployeeCursor {
    ListEmployee private listEmployeeCursor;

    constructor(address value) {
        listEmployeeCursor = ListEmployee(value);
    }

    modifier onlyEmployeeUser(address user, address value) {
        require(
            _checkEmployeeUser(user, value),
            "ListEmployeeCursor: caller is not the user"
        );
        _;
    }

    modifier onlyIdBelongstoAddress(uint256 id) {
        require(
            _checkExistEmployeeAccount(),
            "ListEmployeeCursor: not exist account"
        );
        require(
            _checkIdBelongstoAddress(id),
            "ListEmployeeCursor: id is not belong to address"
        );
        _;
    }
    modifier existEmployeeAccount() {
        require(
            _checkExistEmployeeAccount(),
            "ListEmployeeCursor: not has account"
        );
        _;
    }
    modifier notExistEmployeeAccount() {
        require(
            !_checkExistEmployeeAccount(),
            "ListEmployeeCursor: already existed account"
        );
        _;
    }

    function _checkExistEmployeeAccount() public view returns (bool) {
        uint256 id = listEmployeeCursor.findIdByAddress(msg.sender);
        if (id == type(uint256).max) return false;
        return true;
    }

    function _checkEmployeeUser(address user, address value)
        internal
        pure
        returns (bool)
    {
        if (user == value) return true;
        return false;
    }

    function _checkIdBelongstoAddress(uint256 id) internal view returns (bool) {
        Profile memory item = listEmployeeCursor.at(id);
        return _checkEmployeeUser(item.user, msg.sender);
    }

    function _getListEmployeeCursor() internal view returns (ListEmployee) {
        return listEmployeeCursor;
    }
}
