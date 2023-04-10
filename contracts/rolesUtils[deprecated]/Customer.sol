// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

import "./Roles.sol";

contract Customer {
    using Roles for Roles.Role;

    event CustomerAdded(address indexed _account);
    event CustomerRemoved(address indexed _account);

    Roles.Role private customersList;

    constructor() {
        customersList.addRole(msg.sender);
        emit CustomerAdded(msg.sender);
    }

    ///@dev Modifiers for Customer.
    ///@dev you can restrict who can make modifications to your contract’s state or call your contract’s functions by using a modifier
    modifier onlyCustomer() {
        require(isCustomer(msg.sender));
        _; // this will be replaced by the actual function body when the modifier is used
    }

    /*-----------------------------*/

    ///@dev Customer Utility functions.
    function isCustomer(address _account) public view returns (bool) {
        return customersList.hasRole(_account);
    }

    function addCustomer(address _account) public onlyCustomer {
        customersList.addRole(_account);
        emit CustomerAdded(_account);
    }

    function removeCustomer() public {
        customersList.removeRole(msg.sender);
        emit CustomerRemoved(msg.sender);
    }
    /*-----------------------------*/
}
