contract('Kibbutz', function(accounts) {

  it("Initial kibbutz settings should match", function(done) {
    var kibbutz = Kibbutz.at(Kibbutz.deployed_address);

    Kibbutz.new({ from: accounts[0]  })
    .then(function(kibbutz) {
      kibbutz.heldAmount.call().then(
          function(heldAmount) {
            assert.equal(heldAmount, 0, "Initial held amount doesn't match!");
          }).then( function() {
            return kibbutz.founder.call();
          }).then( function(founder) {
            assert.equal(founder, accounts[0], "Founder doesn't match!");
        }).then( function() {
          return kibbutz.members[0].call();
        }).then( function(members) {
          assert.equal(members, accounts[0], "Founder doesn't show up as member!")
          done();
        }).catch(done);
      }).catch(done);
    });

    it("Joining the kibbutz works", function(done) {
      var kibbutz = Kibbutz.at(Kibbutz.deployed_address);

      Kibbutz.new({ from: accounts[0]  })
      .then(function(kibbutz) {
        kibbutz.joinNow(accounts[1]).then(
          function() {
            assert.equal(kibbutz.members.length, 2,
              "The kibbutz doesn't have the right number of members!");
            done();
          }
        ).catch(done);
      }).catch(done);
    });
});
