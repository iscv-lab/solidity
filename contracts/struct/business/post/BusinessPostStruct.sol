// SPDX-License-Identifier: MIT
pragma solidity >=0.8.14 <0.9.0;

enum BusinessPostStatus {
    NULL,
    OPEN,
    CLOSE,
    UPCOMING
}
struct BusinessPost {
    uint256 id;
    uint256 businessId;
    string hashTag;
    uint256 time;
    string content;
    string imageSource;
    string job;
    BusinessPostStatus status;
}
