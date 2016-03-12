contract Kibbutz {
  address public founder;
  uint public heldAmount;
  address[] public members;

  function Kibbutz() {
    founder = msg.sender;
    heldAmount = 0;
    members.push(msg.sender);
  }

  function joinNow(address newbie) public returns (uint index) {
    members.push(newbie);
    return members.length;
  }

  function getNumberOfMembers() public returns (uint membersLength) {
    return members.length;
  }

  function contribute() {
    heldAmount += msg.value;
  }
}
