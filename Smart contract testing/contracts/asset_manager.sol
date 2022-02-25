// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

struct Asset{
    address owner;
    address did;
    address parent;
    address[] children;
    bool active;
}

contract AssetManager {
    StorageContract store = new StorageContract();

    function addAsset(address assetDid, address parent, address[] memory children) public{
        store.saveAsset(msg.sender, assetDid, parent, children);
    }

    function addAsset(address assetDid, address[] memory children) public{
        store.saveAsset(msg.sender, assetDid, address(0), children);
    }

    function getAsset(address assetDid) public view returns (Asset memory){
        return store.getAsset(assetDid);
    }
}

contract StorageContract{
    mapping(address => Asset) public assets;
    uint lastId = 0;

    function saveAsset(address owner, address assetDid, address parent, address[] memory children) external{
        assets[assetDid] = Asset(owner, assetDid, parent, children, true);
    }

    function getAsset(address assetDid) external view returns(Asset memory){
        return assets[assetDid];
    }
}