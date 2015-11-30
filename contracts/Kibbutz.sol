contract Kibbutz {
  address public founder;
  uint public heldAmount;
  address[] public members;

  function Kibbutz() {
    founder = msg.sender;
    heldAmount = 0;
    members.push(msg.sender);
    //members[0] = msg.sender;
    //members[members.length++] = msg.sender;
  }

  function joinNow(address newbie) public returns (uint index) {
    members.push(newbie);

    return members.length;
  }
}
