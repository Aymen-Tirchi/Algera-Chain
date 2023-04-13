// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Roles.sol";

contract warehouse {
  using Roles for Roles.Role;

  event warehouseAdded(address indexed _account);
  event warehouseRemoved(address indexed _account);

  Roles.Role private warehousesList;

  constructor() {
    warehousesList.addRole(msg.sender);
    emit warehouseAdded(msg.sender);
  }

  ///@dev Modifiers for warehouse.
  modifier onlywarehouse() {
    require(iswarehouse(msg.sender));
    _;
  }
  /*-----------------------------*/

  ///@dev warehouse Utility functions.
  function iswarehouse(address _account) public view returns (bool) {
    return warehousesList.hasRole(_account);
  }

  function addwarehouse(address _account) public onlywarehouse {
    warehousesList.addRole(_account);
    emit warehouseAdded(_account);
  }

  function removewarehouse() public {
    warehousesList.removeRole(msg.sender);
    emit warehouseRemoved(msg.sender);
  }
  /*-----------------------------*/

}
