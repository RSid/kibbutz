contract Kibbutz {
  address public founder;
  uint public heldAmount;
  uint public participants;

  //constructor
  function Kibbutz() {
    founder = msg.sender;
    heldAmount = 0;
    participants = 0;
  }
}
