// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Roles.sol";

contract Thirdparty {
  using Roles for Roles.Role;

  event ThirdpartyAdded(address indexed _account);
  event ThirdpartyRemoved(address indexed _account);

  Roles.Role private thirdpartysList;

  constructor() {
    thirdpartysList.addRole(msg.sender);
    emit ThirdpartyAdded(msg.sender);
  }

  ///@dev Modifiers for Thirdparty.
  modifier onlyThirdparty() {
    require(isThirdparty(msg.sender));
    _;
  }
  /*-----------------------------*/

  ///@dev Thirdparty Utility functions.
  function isThirdparty(address _account) public view returns (bool) {
    return thirdpartysList.hasRole(_account);
  }

  function addThirdparty(address _account) public onlyThirdparty {
    thirdpartysList.addRole(_account);
    emit ThirdpartyAdded(_account);
  }

  function removeThirdparty() public {
    thirdpartysList.removeRole(msg.sender);
    emit ThirdpartyRemoved(msg.sender);
  }
  /*-----------------------------*/

}
