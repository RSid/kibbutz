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
            return kibbutz.getNumberOfMembers.call();
          }).then(
              function(numberOfMembers) {
                makeNumberOfMembersHtml(numberOfMembers['c'].length);
                return numberOfMembers;
            }).then(
              function(numberOfMembers) {
                for(i = 0; i < numberOfMembers; i++) {
                  return kibbutz.members.call(i);
                }
              }
            ).then(
              function(member) {
                console.log(member);
                addMemberListItem(member);
              }
            );
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

function makeNumberOfMembersHtml(numberOfMembers) {
  var number = document.createElement("p");
  var node = document.createTextNode(numberOfMembers);
  number.appendChild(node);

  var element = document.getElementById("numberOfMembers");
  element.appendChild(number);
}

function addMemberListItem(memberInfo) {
  var member = document.createElement("li");
  var node = document.createTextNode(memberInfo);
  member.appendChild(node);

  var element = document.getElementById("members");
  element.appendChild(member);
}
