contract Kibbutz {
  address public founder;
  uint public heldAmount;
  address[] public members;

  //constructor
  function Kibbutz() {
    founder = msg.sender;
    heldAmount = 0;
    members.push(founder);
  }

  function join() public returns (bool success) {
    members[members.length] = msg.sender;

    return true;
  }
}
