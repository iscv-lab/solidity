// SPDX-License-Identifier: MIT
pragma solidity >=0.8.14 <0.9.0;

// library RequestLibrary {

// }
enum IIGStatusRequest {
    NULL,
    WAITING,
    ACCEPTED,
    DECLINED
}

enum IIGRequestType {
    NULL,
    LR,
    SW
}

struct IIGRequest {
    uint256 id;
    uint256 businessId;
    uint256 employeeId;
    uint256 requestDate;
    IIGRequestType requestType;
    IIGStatusRequest statusRequest;
}
