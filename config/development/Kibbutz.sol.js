"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Kibbutz = (function (_Pudding) {
    _inherits(Kibbutz, _Pudding);

    function Kibbutz() {
      _classCallCheck(this, Kibbutz);

      _get(Object.getPrototypeOf(Kibbutz.prototype), "constructor", this).apply(this, arguments);
    }

    return Kibbutz;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Kibbutz.abi = [{ "constant": false, "inputs": [{ "name": "newbie", "type": "address" }], "name": "joinNow", "outputs": [{ "name": "index", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "founder", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "members", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getNumberOfMembers", "outputs": [{ "name": "membersLength", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "heldAmount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Kibbutz.binary = "606060405260008054600160a060020a031916331781556001908155600280549182018082559091908281838015829011605957818360005260206000209182019101605991905b80821115608b57600081556001016047565b505050919090600052602060002090016000508054600160a060020a031916331790555061017d8061008f6000396000f35b509056606060405260e060020a600035046316563de481146100475780634d853ee5146100ac5780635daf08ca146100be5780638b73a46b14610104578063c934d4bd14610110575b005b61011960043560006002600050805480600101828181548183558181151161014857828752610148907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9081019083015b8082111561010c5760008155600101610098565b61012b600054600160a060020a031681565b61012b60043560028054829081101561000257506000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0154600160a060020a031681565b610119600254805b5090565b61011960015481565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b505050600092835250602090912001805473ffffffffffffffffffffffffffffffffffffffff1916909217909155506002549056";

  if ("0xbb17d6a9d1390493e948cb40da96ef42eedb57ca" != "") {
    Kibbutz.address = "0xbb17d6a9d1390493e948cb40da96ef42eedb57ca";

    // Backward compatibility; Deprecated.
    Kibbutz.deployed_address = "0xbb17d6a9d1390493e948cb40da96ef42eedb57ca";
  }

  Kibbutz.generated_with = "1.0.2";
  Kibbutz.contract_name = "Kibbutz";

  return Kibbutz;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Kibbutz = factory;
}