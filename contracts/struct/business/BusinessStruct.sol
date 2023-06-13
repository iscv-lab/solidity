// SPDX-License-Identifier: MIT
pragma solidity >=0.8.14 <0.9.0;

enum EBusinessCategory {
    NULL,
    IIG
}

struct Profile {
    uint256 id;
    address user;
    string name;
    string phone;
    string professional;
    string email;
    string github;
    string linkedin;
    string sourceImage;
    EBusinessCategory category;
}
