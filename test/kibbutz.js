contract('Kibbutz', function(accounts) {
  it("Initial kibbutz settings should match", function(done) {
    var kibbutz = Kibbutz.at(Kibbutz.deployed_address);
    // same as previous example up to here
    Kibbutz.new({ from: accounts[0]  })
    .then(function(conference) {
      kibbutz.heldAmount.call().then(
          function(heldAmount) {
            assert.equal(heldAmount, 0, "Initial held amount doesn't match!");
          }).then( function() {
            return kibbutz.founder.call();
          }).then( function(founder) {
            assert.equal(founder, accounts[0], "Founder doesn't match!");
            done();
        }).catch(done);
      }).catch(done);
    });
});
