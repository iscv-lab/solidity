// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;

import {ListBusinessAppointment} from "../../../database/business/apply/ListBusinessAppointment.sol";
import {BusinessAppointment} from "../../../struct/business/apply/BusinessAppointmentStruct.sol";

abstract contract ListBusinessAppointmenCursor {
    ListBusinessAppointment private listAppointmenCursor;

    constructor(address value) {
        listAppointmenCursor = ListBusinessAppointment(value);
    }

    modifier onlyIdBelongstoBusinessId(uint256 id, uint256 businessId) {
        require(
            _checkIdBelongstoBusinessId(id, businessId),
            "ListApointmentCursor: only request id belongsto id"
        );
        _;
    }

    function _checkIdBelongstoBusinessId(
        uint256 id,
        uint256 businessId
    ) internal view returns (bool) {
        uint256 validateBusinessId = listAppointmenCursor.at(id).businessId;
        if (validateBusinessId == businessId) return true;
        return false;
    }

    function _getListBusinessAppointmenCursor()
        internal
        view
        returns (ListBusinessAppointment)
    {
        return listAppointmenCursor;
    }
}
