var held;
var founder1;

window.onload = function() {
  var accounts = web3.eth.accounts;
  var kibbutz = Kibbutz.at(Kibbutz.deployed_address);

  Kibbutz.new({ from: accounts[0] }).then(
    function(kibbutz) {
      kibbutz.heldAmount.call().then(
        function(heldAmount) {
          makeHeldAmountHtml(heldAmount);
          return kibbutz.founder.call();
        }).then(
          function(founder) {
            makeFounderHtml(founder);
            console.log("Members length: " + kibbutz.members.call().length);
          });
      });
};

function makeFounderHtml(founder) {
  var hash = document.createElement("p");
  var node = document.createTextNode(founder);
  hash.appendChild(node);

  var element = document.getElementById("founder");
  element.appendChild(hash);
}

function makeHeldAmountHtml(heldAmount) {
  var held = document.createElement("p");
  var node = document.createTextNode(heldAmount);
  held.appendChild(node);

  var element = document.getElementById("heldAmount");
  element.appendChild(held);
}
