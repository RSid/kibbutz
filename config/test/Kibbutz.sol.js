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
  Kibbutz.abi = [{ "constant": false, "inputs": [{ "name": "newbie", "type": "address" }], "name": "joinNow", "outputs": [{ "name": "index", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "founder", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "members", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "heldAmount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Kibbutz.binary = "606060405260008054600160a060020a031916331781556001908155600280549182018082559091908281838015829011610067576000839052610067906000805160206103128339815191529081019083015b808211156100ec5760008155600101610053565b50505060009283525060208220018054600160a060020a031916339081179091556002805491929091811015610002578190526000805160206103128339815191528054600160a060020a0319168317905580546001810180835582908280158290116100f0576100f090600080516020610312833981519152908101908301610053565b5090565b505050815481101561000257600091825260208220018054600160a060020a031916929092179091556101e990819061012990396000f300606060405260e060020a600035046316563de4811461003c5780634d853ee51461008f5780635daf08ca146100a1578063c934d4bd146100d5575b005b6100de60043560006002600050805480600101828181548183558181151161010d5782875261010d906000805160206101c98339815191529081019083015b80821115610194576000815560010161007b565b6100f0600054600160a060020a031681565b6100f060043560028054829081101561000257506000526000805160206101c98339815191520154600160a060020a031681565b6100de60015481565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b50505060009283525060208220018054600160a060020a0319168417905560028054849290811015610002578190526000805160206101c98339815191528054600160a060020a03191690921790915580546001810180835584929190829082801582901161019857610198906000805160206101c983398151915290810190830161007b565b5090565b50505081548110156100025760009182526020909120018054600160a060020a03191691909117905550506002549056405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace";

  if ("0xc305c901078781c232a2a521c2af7980f8385ee9" != "") {
    Kibbutz.address = "0xc305c901078781c232a2a521c2af7980f8385ee9";

    // Backward compatibility; Deprecated.
    Kibbutz.deployed_address = "0xc305c901078781c232a2a521c2af7980f8385ee9";
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