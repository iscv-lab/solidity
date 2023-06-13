// SPDX-License-Identifier: MIT
pragma solidity >=0.8.14 <0.9.0;

enum IIGShiftTest {
    NULL,
    ONE,
    TWO,
    THREE,
    FOUR
}
struct IIGLRResult {
    uint256 id;
    uint256 employeeId;
    uint256 testDate;
    IIGShiftTest shiftTest;
    uint256 expireDate;
    uint256 listeningScore;
    uint256 readingScore;
    uint256 time;
}
struct IIGSWResult {
    uint256 id;
    uint256 employeeId;
    uint256 testDate;
    IIGShiftTest shiftTest;
    uint256 expireDate;
    uint256 speakingScore;
    uint256 writingScore;
    uint256 time;
}
