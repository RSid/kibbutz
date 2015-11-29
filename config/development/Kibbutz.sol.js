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
  Kibbutz.abi = [{ "constant": true, "inputs": [], "name": "founder", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "members", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "join", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "heldAmount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Kibbutz.binary = "606060405260008054600160a060020a031916331781556001908155600280549182018082559091908281838015829011605957818360005260206000209182019101605991905b80821115609557600081556001016047565b505050919090600052602060002090016000548154600160a060020a031916600160a060020a03919091161790555060c1806100996000396000f35b509056606060405260e060020a60003504634d853ee5811460385780635daf08ca146049578063b688a36314608d578063c934d4bd14609c575b005b60a4600054600160a060020a031681565b60a4600435600280548290811015600257506000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0154600160a060020a031681565b60b76002805460009133916002565b60b760015481565b600160a060020a03166060908152602090f35b6060908152602090f3";

  if ("0xb46ef5a50681a9df51e0c31cfae5a4bb3614094a" != "") {
    Kibbutz.address = "0xb46ef5a50681a9df51e0c31cfae5a4bb3614094a";

    // Backward compatibility; Deprecated.
    Kibbutz.deployed_address = "0xb46ef5a50681a9df51e0c31cfae5a4bb3614094a";
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