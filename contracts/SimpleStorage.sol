pragma solidity ^0.8.13;

contract SimpleStorage {
    uint256 myVariable;

    function set(uint256 x) public {
        myVariable = x;
    }

    function get() public view returns (uint256) {
        return myVariable;
    }
}
