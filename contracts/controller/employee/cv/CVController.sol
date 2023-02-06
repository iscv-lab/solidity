// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import {Ownable} from "../../../abstract/Ownable.sol";
import {ListEmployeeCursor} from "../../../cursor/employee/ListEmployeeCursor.sol";
import {ListEmployeeCVCursor} from "../../../cursor/employee/cv/ListEmployeeCVCursor.sol";
import {EmployeeCV} from "../../../struct/employee/cv/EmployeeCVStruct.sol";

contract CVController is Ownable, ListEmployeeCursor, ListEmployeeCVCursor {
    constructor(address listEmployeeAddress, address listEmployeeCVAddress)
        Ownable()
        ListEmployeeCursor(listEmployeeAddress)
        ListEmployeeCVCursor(listEmployeeCVAddress)
    {}

    function addCV(uint256 employeeId, string memory source)
        public
        onlyIdBelongstoAddress(employeeId)
    {
        EmployeeCV memory item = EmployeeCV(
            employeeId,
            0,
            block.timestamp,
            source
        );
        _getListEmployeeCVCursor().add(item);
    }
}
