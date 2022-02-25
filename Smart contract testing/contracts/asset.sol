// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Asset{
    address owner;
    address did;
    string ipfsAddress;

    constructor(string memory ipfsUrl){
        owner = msg.sender;
        did = msg.sender;
        ipfsAddress = ipfsUrl;
    }

    function getDid() public view returns(address){
        return did;
    }

    function getIpfsAddress() public view returns(string memory){
        return ipfsAddress;
    }

    function getOwner() public view returns(address){
        return owner;
    }
}