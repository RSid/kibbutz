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

  function distribute() public returns (uint payoutAmount){
      var payOutAmount = 0;
      payoutAmount = heldAmount / members.length;
      for (var i = 0; i < members.length; i++){
          members[i].send(payoutAmount);
      }
      return payoutAmount;
  }
}
