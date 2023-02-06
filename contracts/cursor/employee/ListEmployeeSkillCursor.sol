// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {ListEmployeeSkill} from "../../database/employee/ListEmployeeSkill.sol";

abstract contract ListEmployeeSkillCursor {
    ListEmployeeSkill private listEmployeeSkillCursor;

    constructor(address value) {
        listEmployeeSkillCursor = ListEmployeeSkill(value);
    }

    modifier existSkill(uint256 id, string memory title) {
        require(
            _checkExistSkill(id, title),
            "Employee Skill Cursor: not existed skill"
        );
        _;
    }

    modifier notExistSkill(uint256 id, string memory title) {
        require(
            !_checkExistSkill(id, title),
            "Employee Skill Cursor: already existed skill"
        );
        _;
    }

    modifier onlySkillIdBelongstoId(uint256 id, uint256 employeeId) {
        require(
            _checkIdBelongstoEmployeeId(id, employeeId),
            "Employee Skill Cursor: request skill"
        );
        _;
    }

    function _checkIdBelongstoEmployeeId(uint256 id, uint256 employeeId)
        internal
        view
        returns (bool)
    {
        uint256 validateId = listEmployeeSkillCursor.at(id).employeeId;
        if (validateId == employeeId) return true;
        return false;
    }

    function _checkExistSkill(uint256 employeeId, string memory title)
        public
        view
        returns (bool)
    {
        uint256 id = listEmployeeSkillCursor.findIdByEmployeeIdAndTitle(
            employeeId,
            title
        );
        if (id != type(uint256).max) return true;
        return false;
    }

    function _getListEmployeeSkillCursor()
        internal
        view
        returns (ListEmployeeSkill)
    {
        return listEmployeeSkillCursor;
    }
}
