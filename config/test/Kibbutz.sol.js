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
  Kibbutz.abi = [{ "constant": false, "inputs": [{ "name": "newbie", "type": "address" }], "name": "joinNow", "outputs": [{ "name": "index", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "founder", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "members", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getNumberOfMembers", "outputs": [{ "name": "membersLength", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "heldAmount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "contribute", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "distribute", "outputs": [{ "name": "payoutAmount", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Kibbutz.binary = "606060405260008054600160a060020a031916331781556001908155600280549182018082559091908281838015829011605957818360005260206000209182019101605991905b80821115608b57600081556001016047565b505050919090600052602060002090016000508054600160a060020a03191633179055506101fe8061008f6000396000f35b509056606060405236156100615760e060020a600035046316563de481146100635780634d853ee5146100ad5780635daf08ca146100bf5780638b73a46b14610105578063c934d4bd1461011b578063d7bb99ba14610124578063e4fc6b6d14610131575b005b6101096004356000600260005080548060010182818154818355818115116101bb578183600052602060002091820191016101bb91905b808211156101f55788815560010161009a565b6101a8600054600160a060020a031681565b6101a860043560028054829081101561000257506000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0154600160a060020a031681565b6002545b60408051918252519081900360200190f35b61010960015481565b6100616001805434019055565b610109600254600154046000805b60025460ff821610156101f957600280548290811015610002579083527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0154604051600160a060020a0391909116908390859082818181858883f1505050505060010161013f565b600160a060020a03166060908152602090f35b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916841790555050600254919050565b5090565b50509056";

  if ("0x87984c656020d115e85021517760469360e8d813" != "") {
    Kibbutz.address = "0x87984c656020d115e85021517760469360e8d813";

    // Backward compatibility; Deprecated.
    Kibbutz.deployed_address = "0x87984c656020d115e85021517760469360e8d813";
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