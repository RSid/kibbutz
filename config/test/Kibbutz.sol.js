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
  Kibbutz.abi = [{ "constant": true, "inputs": [], "name": "founder", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "participants", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "heldAmount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Kibbutz.binary = "606060405260008054600160a060020a031916331781556001819055600255606680602a6000396000f3606060405260e060020a60003504634d853ee58114602e5780636c4470fb14604c578063c934d4bd146054575b005b605c60005473ffffffffffffffffffffffffffffffffffffffff1681565b605c60025481565b605c60015481565b6060908152602090f3";

  if ("0x6bf68d0470d58001ca16f7b86f8c21d075f18bda" != "") {
    Kibbutz.address = "0x6bf68d0470d58001ca16f7b86f8c21d075f18bda";

    // Backward compatibility; Deprecated.
    Kibbutz.deployed_address = "0x6bf68d0470d58001ca16f7b86f8c21d075f18bda";
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